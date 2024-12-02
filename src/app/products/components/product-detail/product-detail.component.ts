import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product: any; // Input for product data
  @Output() cartAdd = new EventEmitter<any>(); // Output to send product to parent

  showModal: boolean = false; // Modal visibility flag
  selectedProduct: any; // Store the selected product

  // Open the modal and set the selected product
  openModal(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
  }

  // Handle Add to Cart action
  addToCart(product: any) {
    this.cartAdd.emit(product);
    this.closeModal(); // Close modal after adding to cart
  }

}
