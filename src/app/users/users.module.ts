import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module'; 
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginuserService } from '../loginuser.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SignInComponent  // Declare SignInComponent here
  ],
  imports: [
    MatStepperModule,
    CommonModule,            // Import CommonModule
    UsersRoutingModule,      // Import routing module for users
    ReactiveFormsModule,     // Import ReactiveFormsModule for forms
    LoginComponent ,
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,  // Add MatFormFieldModule here
    MatInputModule   ,
    MatButtonModule         // Import the standalone LoginComponent here
  ],
  providers: [
    LoginuserService,
    // other services
  ]
})
export class UsersModule { }
