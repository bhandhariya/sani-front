import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['fifth'])
    }
}



