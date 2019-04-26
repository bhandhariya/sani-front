import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FirstFormComponent } from './first-form/first-form.component';

const routes: Routes = [
  {path:"",component:FirstFormComponent},
  {path:"first",component:FirstFormComponent},
  {path:"second",component:SecondPageComponent},
  {path:"third",component:ThirdPageComponent},
  {path:"fourth",component:FourthPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
