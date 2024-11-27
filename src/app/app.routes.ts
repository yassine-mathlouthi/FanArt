import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: 'artisan', loadChildren: () => import('./artisan/artisan.module').then(m => m.ArtisanModule) },
];
