import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
constructor(private datasource : DatabaseService, private route : Router){}

  onSubmit(myForm : any){
    console.log(myForm.value);
    this.datasource.postSignUp(myForm.value).subscribe(
      (response) => {
        console.log('Response from server:', response);
        this.route.navigate(['login']);
      },
      (error) => {
        console.error('Error during sign-up:', error);
      }
    );
}
}