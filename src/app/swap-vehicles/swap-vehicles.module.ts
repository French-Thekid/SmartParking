import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwapVehiclesPage } from './swap-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: SwapVehiclesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwapVehiclesPage]
})
export class SwapVehiclesPageModule {}
