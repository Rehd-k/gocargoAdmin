import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePackageRoutingModule } from './create-package-routing.module';
import { CreatePackageComponent } from './create-package.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatePackageComponent
  ],
  imports: [
    CommonModule,
    CreatePackageRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule
  ]
})
export class CreatePackageModule { }
