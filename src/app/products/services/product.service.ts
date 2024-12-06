import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8955/produits/public/products'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products =>
        products.map(product => ({
          id: product.idProduit,
          name: product.nomProduit,
          price: product.prix,
          imageUrl: `assets/prod.png`, // Adjust if images are served from the backend
          description: product.descriptionProduit,
          stock: product.quantiteEnStock, // Useful for showing stock availability
          store: {
            name: product.boutique.nomBoutique,
            description: product.boutique.description
          },
          artistName: `${product.boutique.artisan.prenomArtisan} ${product.boutique.artisan.nomArtisan}`
        }))
      )
    );
  }

  getProducts(page: number = 1, pageSize: number = 6): Observable<{ products: any[]; total: number }> {
    return this.getAllProducts().pipe(
      map(allProducts => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return {
          products: allProducts.slice(start, end),
          total: allProducts.length
        };
      })
    );
  }
  

}
