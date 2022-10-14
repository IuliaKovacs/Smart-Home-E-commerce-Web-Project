import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private prdocutService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( () => {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    //get the "id" param string and convert it to a number

    const theProductId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.prdocutService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

}
