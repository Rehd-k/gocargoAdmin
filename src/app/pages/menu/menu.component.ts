import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: 'home',
      home: true
    },
    {
      title: 'Create Package',
      icon: 'car-outline',
      link: 'create-package',
    },
    {
      title: 'All Packages',
      icon: 'list-outline',
      link: 'packages'
    },
    {
      title: 'Create Mail',
      icon: 'email-outline',
      link: 'create-mail'
    },
    {
      title: 'View Mails',
      icon: 'inbox-outline',
      link: 'view-mail'
    }
  ];

  constructor(private readonly sidebarService: NbSidebarService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  ngOnInit(): void {
  }

}
