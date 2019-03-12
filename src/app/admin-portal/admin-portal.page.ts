import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.page.html',
  styleUrls: ['./admin-portal.page.scss'],
})
export class AdminPortalPage implements OnInit {

  constructor(public router: Router) { }

  logOut(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
  }

}
