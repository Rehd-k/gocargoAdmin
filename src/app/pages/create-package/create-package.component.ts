import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {

  packageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private packageService : PackagesService) { }



  buildForm() {
    this.packageForm = this.formBuilder.group({
      packageName: ['', [Validators.required]],
      packageContents: ['', [Validators.required]],
      packageWeight: ['', [Validators.required]],
      packageAddress: ['', [Validators.required]],
      packageDestination: ['', [Validators.required]],
      packageOwner: ['', [Validators.required]]
    })
  }

  postForm() {
    let values = this.packageForm.value
    console.log(values)
    this.packageService.createPackage(values).subscribe(res => {
      window.location.reload()
    })
  }
  ngOnInit(): void {
    this.buildForm()
  }

}
