import { Component, Input, SimpleChanges } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';
import { DummyProducts } from '../dummy-products';
import { NgFor } from '@angular/common';
import { SharedserviceService } from '../sharedservice.service';
import { DatabaseService } from '../data-base.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
  selector: 'app-product-body',
  standalone: true,
  imports: [ProductsCardComponent, NgFor, NavBarComponent],
  templateUrl: './product-body.component.html',
  styleUrl: './product-body.component.css'
})
export class ProductBodyComponent {

 constructor(public _sharedService : SharedserviceService, private datasource : DatabaseService){}
 products: any = [];
 filteredProducts : any = [];

 ngOnInit(){
 this.datasource.getProducts().subscribe({
  next: (data) => {
    this.products = data;
    this.filteredProducts = this.products;
    console.log(this.filteredProducts);
  },
  error: (err) => {
    console.log(err);
  },
  complete : () => {
    console.log("Success");
  },
 });
 
 }

ngDoCheck() : void{
  this.filterProducts(this._sharedService.SharedSearch);
  console.log(this._sharedService.SharedSearch, "received Search in prod body")
}

filterProducts(searchreceived : any): void {
  //const search = this._sharedService.SharedSearch.toLowerCase();
  console.log(searchreceived, "In filter");
  const search = searchreceived.toLowerCase();
  if(search != '')
  {
    this.filteredProducts = this.products.filter((product: { productName: string, description: string, imageUrl : string, price: string, productId: string, quantity: string; }) =>
      product.productName.toLowerCase().includes(search)
    );
  }
  else
  {
    this.filteredProducts = [...this.products];
  }
} 
 
}
