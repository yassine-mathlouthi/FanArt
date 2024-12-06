import { Component, inject, OnInit , NgModule} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatStepperModule,
    CommonModule,            // Import CommonModule
    ReactiveFormsModule,     // Import ReactiveFormsModule for forms
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,  // Add MatFormFieldModule here
    MatInputModule   ,
    MatButtonModule         // Import the standalone LoginComponent here
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}

  private _formBuilder = inject(FormBuilder);

  // Form Groups
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    firstName: ['', Validators.required],                   // First Name
    lastName: ['', Validators.required],  
    phoneNumber: ['', Validators.required],   
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    storeName: ['', Validators.required],                   // Store Name
    storeAddress: ['', Validators.required],                
    storeDescription: ['', Validators.required],            
  });
  thirdFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],    // Email
    password: ['', Validators.required],                    // Password
    rePassword: ['', Validators.required],                  // Confirm Password
  });

  isLinear = false;


  // Method to handle Create Store button click
  createStore() {
    const artisan = {
      firstName: this.firstFormGroup.value.firstName,
      lastName: this.firstFormGroup.value.lastName,
      phoneNumber: this.firstFormGroup.value.phoneNumber,
      email: this.thirdFormGroup.value.email,
      password: this.thirdFormGroup.value.password,
    };

    const store = {
      storeName: this.secondFormGroup.value.storeName,
      storeAddress: this.secondFormGroup.value.storeAddress,
      storeDescription: this.secondFormGroup.value.storeDescription,

    }
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

