import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-darryl',
  templateUrl: './darryl.page.html',
  styleUrls: ['./darryl.page.scss'],
})
export class DarrylPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/tab5']);
  }

}
