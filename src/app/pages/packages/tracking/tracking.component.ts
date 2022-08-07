import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  trackingForm!: FormGroup
  @Input() _id: any;

  constructor(protected dialogRef: NbDialogRef<any>, private fromBuilder : FormBuilder, private packageService : PackagesService) {
  }

  buildTrackingForm() {
    this.trackingForm = this.fromBuilder.group({
        currentLocation: [''],
        date: [''],
        iconType: [''],
        map_Info: [''],
        tagLine: [''],
        time: [''],
    })
  }

  close() {
    this.dialogRef.close();
  }

  postForm(tracking_id : string) {
   let value =  this.trackingForm.value
   console.log(value)
   this.packageService.updatePackage({packageTracking : value}, tracking_id).subscribe(res => {
    console.log(res)
    window.alert('Success')
   })
  }

  ngOnInit(): void {
    this.buildTrackingForm()
    console.log(this._id)
  }

}
