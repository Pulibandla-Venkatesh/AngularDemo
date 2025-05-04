import { Component } from '@angular/core';
import { CartCardComponent } from '../cart-card/cart-card.component';
import { cartProducts } from '../cart-products';
import { SharedserviceService } from '../sharedservice.service';
import { NgFor } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DatabaseService } from '../data-base.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent, NgFor, NavBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartitems : any = [];

  constructor(public _sharedService : SharedserviceService, public _dataBaseService : DatabaseService){
  }

  ngOnInit(){
      this._dataBaseService.getCartItems().subscribe({
        next: (data) => {
          this.cartitems = data;
          console.log(this.cartitems, "cart items");
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("cart items fetched");
        }
      })
  }
}
  

