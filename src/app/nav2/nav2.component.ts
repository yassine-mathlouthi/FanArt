import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginuserService } from '../loginuser.service';
import { OffreComponent } from '../offre/offre/offre.component';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component 
  implements OnInit {

    constructor(public dialog: MatDialog , private auth: LoginuserService) {}
  
    ngOnInit(): void {
      // Check if the user is initially logged in based on the presence of the token
      this.isLoggedIn = !!localStorage.getItem('token');
    }
    isFixedNavbar = false;
  isLoggedIn = false;
  
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