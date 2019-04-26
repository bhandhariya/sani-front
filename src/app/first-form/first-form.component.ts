import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
 obj={

}
  constructor(private route:Router) { }

  ngOnInit() {
  }
  download(){
    var storage=firebase.storage().ref();
    var pdf=storage.child('ghf.pdf');
    var data=pdf.getDownloadURL();
    data.then(e=>{
      console.log(e)
    })
  }
  upload(){
  
  }
  next(){
    this.route.navigate(['second']);
  }

}
