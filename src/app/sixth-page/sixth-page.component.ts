import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.css']
})
export class SixthPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['sixth']);
  }
}
