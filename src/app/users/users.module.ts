import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginuserService } from '../loginuser.service';


@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  
  ],
  providers: [
    LoginuserService, // Ajoutez le service ici
    // ... autres services si nécessaire
  ]
})
export class UsersModule { }
