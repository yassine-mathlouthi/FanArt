import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';


export const routes: Routes = [
  { path: 'artisan', loadChildren: () => import('./artisan/artisan.module').then(m => m.ArtisanModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', component: LoginComponent },
  { path: 'Signin', component: RegisterComponent },
];