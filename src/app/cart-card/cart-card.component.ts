import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {

  @Input() cartItems ! : {
    cartItemId : number,
    price : string,
    productId : string,
    productName : string,
    quantity : number,
    userId : string
  }

}
