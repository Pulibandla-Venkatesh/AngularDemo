import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {

  @Input() cartItems ! : {id : string,
    name : string,
    image : string,
    quantity : string,
    totalprice : string}

}
