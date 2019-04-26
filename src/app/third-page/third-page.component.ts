import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['fourth'])
  }
}
