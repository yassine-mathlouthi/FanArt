import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
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

  ngOnInit(): void {}

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
