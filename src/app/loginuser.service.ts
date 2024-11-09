import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({

  providedIn: 'root'
})
export class LoginuserService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient,private router: Router) {}

 
  login(body:any) {
    return this.http.post(this.apiUrl+"/user/login", body, httpOptions);
  }

  logout() {
    // Clear authentication token from local storage
    localStorage.removeItem('token');
    // Reload the current page
    window.location.reload();
  }
  
}
