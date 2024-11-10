import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostulerComponent } from './postuler/postuler.component';
import { FooterComponent } from './footer/footer.component';
import { Nav2Component } from '../nav2/nav2.component';
import { FormssModule } from '../forms/forms.module';
import { TestComponent } from '../test/test.component';
import { DashboredComponent } from './dashbored/dashbored.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ContactComponent } from './contact/contact.component';
import { ModelComponent } from './model/model.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MySpaceComponent } from './my-space/my-space.component';

@NgModule({
  declarations: [
    HomePageComponent,
    PostulerComponent,
    NavbarComponent,
    FooterComponent,
    Nav2Component,
    DashboredComponent,
    ContactComponent,
    ModelComponent,
    MySpaceComponent,
    
  ],
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule
  ]
  
})
export class HomeModule {
  
  


 }