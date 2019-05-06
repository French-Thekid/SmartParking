import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-christina',
  templateUrl: './christina.page.html',
  styleUrls: ['./christina.page.scss'],
})
export class ChristinaPage implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/tab5']);
  }
}
