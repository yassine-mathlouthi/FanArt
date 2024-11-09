import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as L from 'leaflet';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  allData: any;
  auth: any;
  form!: FormGroup;


  constructor(private http: HttpClient,private router: Router, public dialog: MatDialog,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const map = L.map('map').setView([36.8225517, 10.194328269317342], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([36.8225517, 10.194328269317342]).addTo(map)
      .bindPopup('ArabSoft')
      .openPopup();
    this.fetchData();
    this.buildForm();
  }
  send(): void {
    const { name, email, message } = this.form.value;
    alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });
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
