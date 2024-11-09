import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostulerComponent } from './postuler/postuler.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { DashboredComponent } from './dashbored/dashbored.component';
import { ContactComponent } from './contact/contact.component';
import { ModelComponent } from './model/model.component';
const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"home",component:HomePageComponent},
  { path: 'postuler/:id', component:PostulerComponent  },
  {path:'post/:id',component:PostComponent},
  {path:"dashbored",component:DashboredComponent},
  {path:"predict",component:ModelComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
