import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css']
})
export class MySpaceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log("here")
    this.dialog.open(AddProductComponent, {
      width: '550px', // Adjust width as needed
      // You can add other configuration options here
    });
  }
}

