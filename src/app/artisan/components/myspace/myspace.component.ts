import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { HeaderComponent } from "../../../layout/components/header/header.component";

@Component({
    selector: 'app-myspace',
    standalone: true,
    templateUrl: './myspace.component.html',
    styleUrl: './myspace.component.css',
    imports: [HeaderComponent]
})
export class MyspaceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddProductComponent, {
      width: '550px', // Adjust width as needed
      // You can add other configuration options here
    });
  }
  openDialogEdit(): void {
    this.dialog.open(EditProductComponent, {
      width: '550px', // Adjust width as needed
      // You can add other configuration options here
    });
  }
  open_Dialog_Edit_Profile(): void {
    this.dialog.open(EditProfileComponent, {
      width: '550px', // Adjust width as needed
      // You can add other configuration options here
    });
  }
}
