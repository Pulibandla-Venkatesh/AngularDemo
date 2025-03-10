import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { ProductBodyComponent } from './product-body/product-body.component';
import { DummyProducts } from './dummy-products';
import { SharedserviceService } from './sharedservice.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public _sharedSevice: SharedserviceService){}
  title = 'AngularDemo';
  recievedSearch : any = '';
     
   WantedProducts(data:any){
    this.recievedSearch = this._sharedSevice.SharedSearch;
    console.log(this._sharedSevice.SharedSearch, "Shared search in app com");
    console.log(this.recievedSearch, "received Search in app com")
    
  }

}
