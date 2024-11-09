import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PostComponent } from '../post/post.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  allData: any;
  auth: any;

  constructor(private http: HttpClient,private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchData();
  }
  navigateToPostuler(item: any): void {
    // Assuming you have the Angular Router imported and injected in the constructor
    this.router.navigate(['/postuler', item._id, { data: item }]);
  }
  fetchData(): void {
    this.http.get<any>('http://127.0.0.1:3000/offre/all').subscribe(
      (data) => {
        this.allData = data;
        console.log("data",this.allData)
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(PostComponent, {
      width: '600px', height:"500px"   });

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
