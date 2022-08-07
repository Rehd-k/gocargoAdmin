import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenMailComponent } from './gen-mail.component';

const routes: Routes = [{ path: '', component: GenMailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenMailRoutingModule { }
