import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginuserService } from '../loginuser.service';
import { OffreComponent } from '../offre/offre/offre.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog , private auth: LoginuserService) {}

  ngOnInit(): void {
    // Check if the user is initially logged in based on the presence of the token
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  isFixedNavbar = false;
isLoggedIn = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navOffset = 200; // Adjust this value as necessary

    // Toggle the 'visible' class based on the scroll position
    this.isFixedNavbar = scrollPosition >= navOffset;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OffreComponent, {
      width: '720px', height:"600px"   });

    // Souscrire à la fermeture du dialogue
    dialogRef.afterClosed().subscribe(result => {
      // Traitez le résultat si nécessaire
      console.log('Le dialogue a été fermé avec le résultat : ', result);
    });
  }
  logout() {
    this.auth.logout();
  }
}
