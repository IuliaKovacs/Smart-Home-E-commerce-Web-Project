import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = sessionStorage;
  // storage: Storage = localStorage;

  constructor() { 

    // read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if (data != null) {
      this.cartItems = data;
      
      // compute totals based on the data that is read from storage
      this.computeCartTotals();
    }

  }

  addToCart(theCartItem: CartItem){
    //check if the type of item is already in cart (to increase quantity)
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0){

      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id );

      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart == true){
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();

  }

  
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.unitPrice*currentCartItem.quantity;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values -> all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    //log cart data for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);

  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
    
    // persist cart data
    this.persistCartItems();
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if (theCartItem.quantity === 0){
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  
  }

  remove(theCartItem: CartItem){
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    if (itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }

}
