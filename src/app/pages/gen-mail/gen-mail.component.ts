import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-gen-mail',
  templateUrl: './gen-mail.component.html',
  styleUrls: ['./gen-mail.component.scss']
})
export class GenMailComponent implements OnInit {

  mailForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private mailService  : PackagesService) { }


  buildForm() {
    this.mailForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      Header: ['', [Validators.required]],
      senderName: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]],
      name : ['', [Validators.required]],
      trackingNumber: ['']
    })
  }
  
  sendMail() {
    this.mailService.sendMailService(this.mailForm.value).subscribe(res => {
      console.log(res)
    })
    let values = this.mailForm.value
  }

  ngOnInit(): void {
    this.buildForm()
  }

}
