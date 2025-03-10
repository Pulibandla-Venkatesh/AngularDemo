import { Routes } from "@angular/router";
import { ProductBodyComponent } from "./product-body/product-body.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { authGuardGuard } from "./guards/auth-guard.guard";

export const routes : Routes = [

    {path : 'login', component : LoginComponent},
    {path : 'products', component : ProductBodyComponent, canActivate : [authGuardGuard]},
    {path : 'viewdetails', component : ViewDetailsComponent, canActivate : [authGuardGuard]},
    {path : 'cart', component : CartComponent, canActivate : [authGuardGuard]},
    {path : 'Signup', component : SignUpComponent},
    {path : '', component : LoginComponent},
    {path : '**', component : LoginComponent},
]