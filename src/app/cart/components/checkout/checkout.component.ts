import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICountry } from 'ngx-countries-dropdown';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxCountriesDropdownModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  countryListConfig = {
    hideDialCode: true, // This hides the country code
    hideCode: true
    
  };
  
  selectedCountryConfig = {
    hideDialCode: true, // This hides the country code
    hideCode: true
    
  };

  ngOnInit(): void {}

  onCountryChange(country: ICountry) {
    const countryCode = country.name || '';
    this.checkoutForm.get('country')?.setValue(countryCode);
  }
  


  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Form Submitted:', this.checkoutForm.value);
    }
  }

}