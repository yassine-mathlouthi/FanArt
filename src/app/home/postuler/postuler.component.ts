import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  auth: any;
  selectedData= {
    titre: '', 
    lieu: '', 
    temp: '', 
    image: '',
    descriptionPoste: '', 
    qualification: '', 
    posteOuvert: '', 
    contrat: ''
  };
  isFixedNavbar = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog
  ) {}
    itemid:any ; 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['id'];
      this.itemid=itemId
      this.http.get<any>(`http://127.0.0.1:3000/offre/find/${itemId}`).subscribe(
        (data) => {
          this.selectedData = data;
        },
        (error) => {
          console.log('Error fetching data by ID:', error);
        }
      );
    });
  }

  navigateToPostuler(): void {
    // You can access the card data here (this.selectedData)
    // You can also navigate to another page if needed
    // Use this.router.navigate for that
  }
  
  isLoggedIn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navOffset = 200; // Adjust this value as necessary
  
    // Toggle the 'visible' class based on the scroll position
    this.isFixedNavbar = scrollPosition >= navOffset;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostComponent, {
      width: '520px',
      height: '618px',
      data: { itemId: this.itemid }
    });

    // Subscribe to the closing of the dialog
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if necessary
      console.log('The dialog was closed with result: ', result);
    });
  }

  logout() {
    this.auth.logout();
  }
}
