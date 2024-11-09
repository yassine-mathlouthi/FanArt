import { Component, HostListener, Inject } from '@angular/core';
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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
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
    ReactiveFormsModule
  ]
})
export class PostComponent {
  candidatureForm!: FormGroup;
  selectedFile: any = null;
  jobId: any  = null;





  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PostComponent>,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) {
    console.log(this.jobId)
    this.route.params.subscribe(params => {
      console.log(params); // Vérifiez les paramètres ici
      this.jobId = params['id']; // Get the ID from route
      console.log(this.jobId);
      this.candidatureForm = this.fb.group({
        fullName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        coverLetter: ['', Validators.required],
        resume:"",
        jobId: [this.jobId, ], // Use the retrieved jobId here
      });
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

  submitForm() {
    if (this.candidatureForm.valid) {
      const formData = new FormData();
      formData.append('fullName', this.candidatureForm.get('fullName')?.value);
      formData.append('email', this.candidatureForm.get('email')?.value);
      formData.append('phoneNumber', this.candidatureForm.get('phoneNumber')?.value);
      formData.append('coverLetter', this.candidatureForm.get('coverLetter')?.value);
      formData.append('resume', this.selectedFile); // Append the file directly
      formData.append('jobId', this.data.itemId);

      this.httpClient.post('http://127.0.0.1:3000/postule/create', formData)
        .subscribe((response: any) => {
          console.log('Réponse du serveur :', response);
          this.dialogRef.close();
        }, (error: any) => {
          console.error('Erreur lors de l\'envoi des données au backend :', error);
  
        });
    }
  }
  

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    this.candidatureForm.get('resume')?.setValue(this.selectedFile);
  }
  


}










