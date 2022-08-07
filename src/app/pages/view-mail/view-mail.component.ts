import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.scss']
})
export class ViewMailComponent implements OnInit {

  Mails: any

  constructor(private mailService  : PackagesService) { }


  getMails() {
    this.mailService.gatMailsService().subscribe(res => {
      this.Mails = res
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.getMails()
  }

}
