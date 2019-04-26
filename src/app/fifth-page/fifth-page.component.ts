import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['sixth']);
  }
}
