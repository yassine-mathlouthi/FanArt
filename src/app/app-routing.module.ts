

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path:"" , component: HomePageComponent
  }, 
  {
    path:"test" , component:TestComponent 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
