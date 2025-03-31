import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../data-base.service';
import { AuthServiceService } from '../auth-service.service';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router : Router, private datasource : DatabaseService, private authService : AuthServiceService){}

  toSignup(){
    this.router.navigate(['Signup']);
  }

  toLogin(myForm: any){
    console.log(myForm.value);
    this.datasource.postLogin(myForm.value).subscribe(
      (response: any) => {
        this.authService.setToken(response.token);
        this.authService.token = response.token;
        this.datasource.userid = response.userId;
        console.log('Response from server:', response);
        console.log(this.datasource.userid);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
  }

}
