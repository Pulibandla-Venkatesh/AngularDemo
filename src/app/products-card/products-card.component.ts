import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
  constructor(private router : Router){}
   
@Input() product ! : {id : string, productName : string, imageUrl : string, price : number }


viewProduct(product:any): any{
this.router.navigate(['viewdetails'], { state: { productdetail: product } });
console.log(product);
  
}
  
}
