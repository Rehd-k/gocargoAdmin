import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'packages',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'packages',
        loadChildren: () => import('../packages/packages.module').then(m => m.PackagesModule)
      },
      {
        path: 'create-package',
        loadChildren: () => import('../create-package/create-package.module').then(m => m.CreatePackageModule)
      },
      {
        path: 'create-mail',
        loadChildren: () => import('../gen-mail/gen-mail.module').then(m => m.GenMailModule)
      },
      {
        path: 'view-mail',
        loadChildren: () => import('../view-mail/view-mail.module').then(m => m.ViewMailModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
