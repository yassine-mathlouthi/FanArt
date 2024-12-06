import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyspaceComponent } from './components/myspace/myspace.component';

const routes: Routes = [
  {
    path:"myspace" , component:MyspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtisanRoutingModule { }
