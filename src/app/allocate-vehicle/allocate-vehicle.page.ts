import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-allocate-vehicle',
  templateUrl: './allocate-vehicle.page.html',
  styleUrls: ['./allocate-vehicle.page.scss'],
})
export class AllocateVehiclePage implements OnInit {
 
  constructor(private router: Router,public platform: Platform) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['admin-portal']);
  }

}
