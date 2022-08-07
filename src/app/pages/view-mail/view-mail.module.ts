import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';

import { ViewMailRoutingModule } from './view-mail-routing.module';
import { ViewMailComponent } from './view-mail.component';



@NgModule({
  declarations: [
    ViewMailComponent
  ],
  imports: [
    CommonModule,
    ViewMailRoutingModule,
    NbCardModule
  ]
})
export class ViewMailModule { }
