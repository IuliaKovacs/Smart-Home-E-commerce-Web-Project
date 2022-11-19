import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  private products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    //build Url based on productId
    const productUrl = `${this.baseUrl}/${theProductId}`;
    
    return this.httpClient.get<Product>(productUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
  
  getProductListPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<GetResponseProducts>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  searchProducts(theKeyword: string):  Observable<Product[]> {
    
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<GetResponseProducts>{

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
  
  addProduct(newProduct: Product) {
    return this.httpClient.post<Product>(this.baseUrl, newProduct);
  }

  linkProductToCategory(productId: number, categoryId: number) {
    let linkProductToCategoryURL = `${this.categoryUrl}/${categoryId}/products/${productId}`;
    console.log(linkProductToCategoryURL);
    this.httpClient.put(linkProductToCategoryURL, null).subscribe({
      next: response => {
        //alert(`Thank you for linking!`);
      },
      error: err => {
        alert(`There was an error: ${err.message}`);
      }
    }
    );
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }

}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }

}