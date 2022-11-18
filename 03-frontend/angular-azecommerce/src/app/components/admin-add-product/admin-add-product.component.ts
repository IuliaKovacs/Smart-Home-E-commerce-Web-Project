import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  productFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private router: Router) { 
      
    }

  ngOnInit(): void {
    this.productFormGroup = new FormGroup({
      sku: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      unitPrice: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      unitsInStock: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
       })
  }

  addNewProduct(){

    let newProduct = new Product();
    
    newProduct.sku = this.productFormGroup.controls['sku'].value;
    newProduct.name = this.productFormGroup.controls['name'].value;
    newProduct.description = this.productFormGroup.controls['description'].value;
    newProduct.unitPrice = this.productFormGroup.controls['unitPrice'].value;
    newProduct.imageUrl = this.productFormGroup.controls['imageUrl'].value;
    newProduct.unitsInStock = this.productFormGroup.controls['unitsInStock'].value;
  
    let category = this.productFormGroup.controls['category'].value;
    newProduct.category = this.getCategory(category);

    console.log(newProduct);

    if (newProduct.sku !== '' && newProduct.name !== '' && newProduct.description !== '' && newProduct.unitPrice !== null
    && newProduct.imageUrl !== '' && newProduct.unitsInStock !== null){
      this.productService.addProduct(newProduct).subscribe({
        next: response => {
          alert(`Thank you for adding new products!`);
          this.router.navigateByUrl("/products");
        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
      );
    }


  }
  
  getCategory(category: string): ProductCategory{
    let cat = new ProductCategory();
    cat.categoryName = category;
    if (category === "Smart Lighting"){
      cat.id = 1;
    }
    else if (category === "Security and Surveillance"){
      cat.id = 2;
    }
         else if (category === "Smart Thermostats"){
          cat.id = 3;
        }

    return cat;
  }

}
