import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { NbButtonModule, NbCardModule, NbStepperModule , NbDialogModule, NbFormFieldModule, NbSelectModule} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackingComponent } from './tracking/tracking.component';


@NgModule({
  declarations: [
    PackagesComponent,
    TrackingComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule,
    NbFormFieldModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class PackagesModule { }
