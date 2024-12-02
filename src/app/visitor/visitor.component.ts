import { Component } from '@angular/core';
import { ProductService } from '.././products/services/product.service';
import { CartService } from '.././cart/services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from "../products/components/product-detail/product-detail.component";

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css'
})
export class VisitorComponent {
  products: { id: number; name: string; price: number; imageUrl: string }[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  totalProducts: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) { }

  categories = [

    { name: 'Sculptures', imageUrl: 'assets/categories/sculptures.png' },
    { name: 'Paintings', imageUrl: 'assets/categories/paintings.png' },
    { name: 'Photography', imageUrl: 'assets/categories/photography.png' },
    { name: 'Digital Art', imageUrl: 'assets/categories/digital-drawing.png' },
  ];

  testimonials = [
    { message: 'Amazing artworks! Highly recommended.', name: 'John Doe' },
    { message: 'The quality is outstanding, and the process was smooth.', name: 'Jane Smith' },
    { message: 'Unique pieces that I couldn’t find elsewhere!', name: 'Emily Johnson' },
  ];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const result = this.productService.getProducts(this.currentPage, this.pageSize);
    this.products = result.products;
    this.totalProducts = result.total;
  }

  handleAddToCart(product: any) {
    this.cartService.addToCart(product);
  }

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.totalProducts) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  canGoNext(): boolean {
    return this.currentPage * this.pageSize < this.totalProducts;
  }

}