import { Component } from '@angular/core';

import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanifront';
  
  test(){
    firebase.initializeApp({
      apiKey: "AIzaSyD0odymXr_m3OPJNtHYFH2cHeftpmfZu4U",
      authDomain: "digitalapp-49c9e.firebaseapp.com",
      databaseURL: "https://digitalapp-49c9e.firebaseio.com",
      projectId: "digitalapp-49c9e",
      storageBucket: "digitalapp-49c9e.appspot.com",
      messagingSenderId: "937297135346"
    })
    var storage=firebase.storage().ref()
    var pdf=storage.child('ghf.pdf');
    var url=pdf.getDownloadURL();
    console.log(url)
  }
  
}
