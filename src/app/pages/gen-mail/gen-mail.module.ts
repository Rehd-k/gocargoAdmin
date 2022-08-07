import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenMailRoutingModule } from './gen-mail-routing.module';
import { GenMailComponent } from './gen-mail.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenMailComponent
  ],
  imports: [
    CommonModule,
    GenMailRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule
  ]
})
export class GenMailModule { }
