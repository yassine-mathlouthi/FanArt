import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { FormssModule } from './forms/forms.module';
import { OffreModule } from './offre/offre.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import { HomeModule } from './home/home.module'; // Verify this import
import { HomeRoutingModule } from './home/home-routing.module';
import { Nav2Component } from './nav2/nav2.component';
import { NavbarComponent } from './navbar/navbar.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }