import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
    console.log('home component');
  }
  create(){
    this.router.navigate(['create']);
  }
  view(){
    this.router.navigate(['view']);
  }
  home(){
    this.router.navigate(['home1']);
  }
}
