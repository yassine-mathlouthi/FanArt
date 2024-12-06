import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    // Check if the user is initially logged in based on the presence of the token
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  isFixedNavbar = false;
  isLoggedIn = false;
  logout() {
    //this.auth.logout();
  
  }


}
