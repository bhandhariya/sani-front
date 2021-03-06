import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { SaventhPageComponent } from './saventh-page/saventh-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SaventhPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
