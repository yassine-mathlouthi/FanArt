import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
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
        ReactiveFormsModule
      ]
})


  export class OffreComponent {
    candidatureForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<OffreComponent>,
    private fb: FormBuilder,
    private httpClient: HttpClient // Ajoutez le service HttpClient
  ) { 
    this.candidatureForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      temp: ['', Validators.required],
      image: ['', Validators.required],
      descriptionPoste: ['', Validators.required],
      qualification: ['', Validators.required],
      posteOuvert: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      contrat: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm() {
    if (this.candidatureForm.valid) {
      const formData = this.candidatureForm.value;

      // Envoi des données au backend
      this.httpClient.post('http://127.0.0.1:3000/offre/create', formData)
        .subscribe((response: any) => {
          console.log('Réponse du serveur :', response);
          // Fermez le dialogue ou effectuez d'autres actions si nécessaire
          this.dialogRef.close();
        }, (error: any) => {
          console.error('Erreur lors de l\'envoi des données au backend :', error);
          // Gérez les erreurs ici si nécessaire
        });
    }
  }
  }
  

