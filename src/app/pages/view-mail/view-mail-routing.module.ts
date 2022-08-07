import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMailComponent } from './view-mail.component';

const routes: Routes = [{ path: '', component: ViewMailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMailRoutingModule { }
