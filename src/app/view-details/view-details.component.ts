import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cartProducts } from '../cart-products';
import { SharedserviceService } from '../sharedservice.service';
import { DatabaseService } from '../data-base.service';


@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {

  productDetail : any;
  quantity: number = 1;

  constructor(public router : Router, public _sharedService : SharedserviceService, private datasource : DatabaseService){
    const navigation = history.state;
    this.productDetail = navigation.productdetail;
    console.log(navigation);
  }    

  upCount()
  {
    this.quantity = this.quantity + 1;
  }

  downCount()
  {
    if(this.quantity<=1)
    {
      this.quantity = 1;
    }
    else
    {
      this.quantity = this.quantity  - 1;
    }
  }

  backtoproducts(){
    this.router.navigate(['products']);
  }

  addtocart(){
    // console.log(cartProducts);
    // this._sharedService.cartArray.push({
    //   id : this.productDetail.id,
    //   name : this.productDetail.name,
    //   image : this.productDetail.image,
    //   quantity : this.quantity,
    //   totalprice : this.quantity * this.productDetail.price
    // })

    let data  = {
      "userId" : this.datasource.userid.toString()?? null,
      "productId" : this.productDetail.productId,
      "productName": this.productDetail.productName,
      "price" : (this.quantity * this.productDetail.price).toString()?? null,
      "quantity" : this.quantity
    }

    this.datasource.addtoCart(data).subscribe(
      (response: any) => {
        console.log('Response from server:', response);
        this.router.navigate(["products"]);
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
    console.log(data)
  }

}
