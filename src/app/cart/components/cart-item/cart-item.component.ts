import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartItems: { id: number; name: string; price: number; imageUrl: string; description: string; quantity: number; }[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems().map(item => ({
      ...item,
      quantity: item.quantity || 1 // Ensure default quantity is 1 if not provided
    }));
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  confirmRemove(productId: number) {
    if (confirm('Are you sure you want to remove this item?')) {
      this.removeFromCart(productId);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);  // Fixes total calculation based on quantity
  }

}