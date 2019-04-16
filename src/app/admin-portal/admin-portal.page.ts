import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.page.html',
  styleUrls: ['./admin-portal.page.scss'],
})
export class AdminPortalPage implements OnInit {
  select: string = "rgba(0,0,0,0.2)";
  select1: string = "rgba(0,0,0,0.2)";
  select2: string = "rgba(0,0,0,0.2)";
  select3: string = "rgba(0,0,0,0.2)";
  select4: string = "rgba(0,0,0,0.2)";

  constructor(public router: Router, private storage: Storage, ) { }

  logOut() {
    this.router.navigate(['login']);
  }


  async EntranceV() {
    //console.log(JSON.parse(localStorage.getItem('userID')));

    this.select = "rgba(255,255,255,0.4)";
    this.router.navigate(['allocate-vehicle']);
    await this.stall(300);
    this.select = "rgba(0,0,0,0.2)";
  }
  async exitV() {
    this.select1 = "rgba(255,255,255,0.4)";
    this.router.navigate(['deallocate-vehicle']);
    await this.stall(300);
    this.select1 = "rgba(0,0,0,0.2)";
  }
  async vehicleV() {
    this.select2 = "rgba(255,255,255,0.4)";
    this.router.navigate(['vparked']);
    await this.stall(300);
    this.select2 = "rgba(0,0,0,0.2)";
  }
  reportV(){
    this.router.navigate(['creports']);
  }

  ngOnInit() {
    this.select = "rgba(0,0,0,0.2)";
  }


  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
