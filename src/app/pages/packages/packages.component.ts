import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PackagesService } from 'src/app/services/packages.service';
import { PackagesDto } from './packagesDto';
import { TrackingComponent } from './tracking/tracking.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  
  packages: PackagesDto[] = []

  constructor(private packageService: PackagesService, private dialogService: NbDialogService) { }


  getPackages() {
    this.packageService.getAllPackages().subscribe(
      res => {
        console.log(res)
        this.packages = res
      }
    )
  }


  addTrackinginfo(_id :string) {
    this.dialogService.open(TrackingComponent, { 
      context: { _id},
      hasScroll : true,
      autoFocus: true
      
    });
  }

  ngOnInit(): void {
    this.getPackages()
    
  }

}
