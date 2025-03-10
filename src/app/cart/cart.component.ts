import { Component } from '@angular/core';
import { CartCardComponent } from '../cart-card/cart-card.component';
import { cartProducts } from '../cart-products';
import { SharedserviceService } from '../sharedservice.service';
import { NgFor } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent, NgFor, NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartitems = [];

  constructor(public _sharedService : SharedserviceService){
    console.log(this._sharedService.cartArray, "cart");
  }

  ngOnit(){
    this.cartitems = this._sharedService.cartArray;
    console.log(this.cartitems, "CArt items");
  }
  

}
