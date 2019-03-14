import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllocateVehiclePage } from './allocate-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AllocateVehiclePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllocateVehiclePage]
})
export class AllocateVehiclePageModule {}
