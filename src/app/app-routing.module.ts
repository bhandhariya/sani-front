import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { SaventhPageComponent } from './saventh-page/saventh-page.component';

const routes: Routes = [
  {path:"",component:FirstFormComponent},
  {path:"first",component:FirstFormComponent},
  {path:"second",component:SecondPageComponent},
  {path:"third",component:ThirdPageComponent},
  {path:"fourth",component:FourthPageComponent},
  {path:"fifth",component:FifthPageComponent},
  {path:"sixth",component:SixthPageComponent},
  {path:"seventh",component:SaventhPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
