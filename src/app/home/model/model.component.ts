import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  showSpinner: boolean = false;
  predictionResult: string = '';

  constructor(private http: HttpClient) {}

  onFileChange(inputElement: HTMLInputElement) {
    let file: File = inputElement.files![0];
    // Handle file change event here if needed
}


predictResume(fileInput: HTMLInputElement) {
  // Display the spinner
  this.showSpinner = true;

  // Get the selected file from the input element
  let file: File = fileInput.files![0];

  // Check if a file is selected
  if (file) {
      // Create FormData object and append the file
      let formData: FormData = new FormData();
      formData.append('file', file);

      // Send the file to the Flask endpoint
      this.http.post<any>('http://127.0.0.1:5000/predict', formData).subscribe(
          (response) => {
            console.log("here")
              // Hide the spinner
              this.showSpinner = false;
              // Process the response
              this.predictionResult = response.prediction;
          },
          (error) => {
              // Hide the spinner
              this.showSpinner = false;
              // Handle the error
              console.error(error);
          }
      );
  } else {
      console.error("No file selected");
  }
}

}
