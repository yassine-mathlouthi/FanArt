import {Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/loginuser.service';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ MatSnackBarModule,MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,CommonModule ],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  PasswordFormControl = new FormControl('', [Validators.required]);
  matcher2 =new MyErrorStateMatcher();
  
  user: User = new User();

  form!:FormGroup
  constructor(private loginUserService: LoginuserService,private fb : FormBuilder,private route:Router,private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.form= new FormGroup({}) ; 
  }
  userLogin() {
    const data = {
      email: this.emailFormControl.value,
      password: this.PasswordFormControl.value
    };
    if ( data.email==""|| data.password=="") {
      this._snackBar.open("Les champs sont obligatoire", "Close", { duration: 3000 ,verticalPosition: 'top'});
      
    }else {
      this.loginUserService.login(data).subscribe(
        (response: any) => {
          console.log("Response:", response);
          if (response) {
            console.log("Login successful");
            this._snackBar.open("Login réussi", "Close", { duration: 3000 ,verticalPosition: 'top' });
            this.route.navigate(["/"]);
            localStorage.setItem('token', response.token);
            
          } else {
            
          }
        },
        (error) => {
          console.log(""); // Assuming server sends an error message
            this._snackBar.open("Login failed : email or password invalid", "Close", { duration: 3000  ,verticalPosition: 'top' });
          console.error("Error:", error);
          
        }
      );
    }
    
  }
  



  
}
