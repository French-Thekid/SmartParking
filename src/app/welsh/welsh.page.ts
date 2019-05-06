import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welsh',
  templateUrl: './welsh.page.html',
  styleUrls: ['./welsh.page.scss'],
})
export class WelshPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/tab5']);
  }

}
