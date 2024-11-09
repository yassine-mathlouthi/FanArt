import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LangageService } from '../../langage.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-form',
    templateUrl:'./form.component.html',

    styleUrls: ['./form.component.css'],
    standalone: true,
    imports: [MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      HttpClientModule,
      MatDatepickerModule,
      MatIconModule,
      MatCheckboxModule,
      MatRadioModule,
      MatProgressBarModule,
      MatStepperModule,
      MatSelectModule, 
      FormsModule,
      ReactiveFormsModule,
      CommonModule 
    ]
   

})

export class FormComponent {
  progress_bar=false ; 
  ia_scrapping!: FormGroup ;
  constructor(private fb: FormBuilder,private httpClient: HttpClient) {
    this.ia_scrapping = this.fb.group({
      variable: ['', Validators.required], // Define titre form control with validators
      
      // Define other form controls here
    });
  }
  
  ngOnInit() {
 
  }
  data : any  ; 
  submitForm() {
    this.progress_bar = true; // Show progress bar

    // Simulate a delay of 25 seconds before hiding the progress bar
    setTimeout(() => {
      this.progress_bar = false; // Hide progress bar after 25 seconds
    }, 25000);
    if (this.ia_scrapping.valid) {
      const formData = this.ia_scrapping.value;
      this.httpClient.post('http://127.0.0.1:5000/scrap/profiles', formData)
        .subscribe((response) => { // Assuming response is an array
          console.log('Réponse du serveur :', response);
          this.data = response; // Assign the response to data
        }, (error: any) => {
          console.error('Erreur lors de l\'envoi des données au backend :', error);
        });
    }
  }
  
}
