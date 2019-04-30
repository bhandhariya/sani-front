    // Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
<<<<<<< HEAD
import { AngularFireModule } from "angularfire2";
import { AngularFireStorageModule } from "angularfire2/storage";
import { ngfModule } from "angular-file"

=======
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ngfModule, ngf } from "angular-file"
>>>>>>> a1f64ed2b25fc607b5d2db02b021fc4db1a4bd38

    // Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { SaventhPageComponent } from './saventh-page/saventh-page.component';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======

    // Directives
import { OnlyNumberWithLengthDirective } from './shared/directives/onlynumberswithlength';
>>>>>>> a1f64ed2b25fc607b5d2db02b021fc4db1a4bd38
    
@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SaventhPageComponent,
    OnlyNumberWithLengthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
=======
    BsDatepickerModule.forRoot(),
>>>>>>> a1f64ed2b25fc607b5d2db02b021fc4db1a4bd38
    ngfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
