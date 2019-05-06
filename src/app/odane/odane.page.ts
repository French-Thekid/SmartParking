import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odane',
  templateUrl: './odane.page.html',
  styleUrls: ['./odane.page.scss'],
})
export class OdanePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/tab5']);
  }

}
