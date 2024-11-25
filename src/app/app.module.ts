import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormssModule } from './forms/forms.module';
import { OffreModule } from './offre/offre.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import { HomeModule } from './home/home.module'; // Verify this import
import { HomeRoutingModule } from './home/home-routing.module';
import { Nav2Component } from './nav2/nav2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    NoopAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    OffreModule,
    FormssModule,
    MatDialogModule,
    HomeModule, // Import HomeModule after the other imports
    HomeRoutingModule ,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    _MatCheckboxRequiredValidatorModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }