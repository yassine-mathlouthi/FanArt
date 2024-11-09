// langage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangageService {
  private apiUrl = 'https://api.github.com/languages';

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajoutez cette méthode pour logguer les données
  logLanguages(): void {
    this.getLanguages().subscribe(
      (languages: any[]) => {
        console.log('Langages récupérés depuis l\'API:', languages);
        // Ajoutez d'autres vérifications si nécessaire
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des langages de programmation', error);
      }
    );
  }
}
