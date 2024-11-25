import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with fields and validators
    this.productForm = this.fb.group({
      nomProduit: ['', [Validators.required, Validators.minLength(3)]],
      descriptionProduit: ['', [Validators.required, Validators.maxLength(500)]],
      prix: [null, [Validators.required, Validators.min(0)]],
      quantiteEnStock: [null, [Validators.required, Validators.min(0)]],
      imageProduit: [''],
      idArtisan: [''],
    });
  }
  // Handle the form submission
  onAddProduct(): object | void {
      const productData = this.productForm.value;
      console.log(productData); 
  }
}
