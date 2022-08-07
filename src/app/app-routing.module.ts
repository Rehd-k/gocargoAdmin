import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'select',
    pathMatch: 'full'
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/user/landing/landing.module').then(m => m.LandingModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
