import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'admin-portal',
    loadChildren: './admin-portal/admin-portal.module#AdminPortalPageModule'
  },
  {
    path: 'allocate-vehicle',
    loadChildren:
      './allocate-vehicle/allocate-vehicle.module#AllocateVehiclePageModule'
  },
  {
    path: 'deallocate-vehicle',
    loadChildren:
      './deallocate-vehicle/deallocate-vehicle.module#DeallocateVehiclePageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },  { path: 'sspot', loadChildren: './sspot/sspot.module#SspotPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
