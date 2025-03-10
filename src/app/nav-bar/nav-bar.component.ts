import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SharedserviceService } from '../sharedservice.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private _sharedService : SharedserviceService, private router : Router, private authService : AuthServiceService){}

  searchText = '';

  onSearchChange(){
    console.log('x');
    //this.SendText.emit(this.searchText);
    this._sharedService.SharedSearch = this.searchText;
    console.log(this._sharedService.SharedSearch, "x");
  }

  backtoproducts(){
    this.router.navigate(['products']);
  }

  gotocart(){
    this.router.navigate(['cart']);
    console.log("z");
  }

  logout(){
    this.authService.token = "";
    this.router.navigate(['/login'])
  }

}
