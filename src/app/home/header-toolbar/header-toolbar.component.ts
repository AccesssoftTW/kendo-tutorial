import { Component, OnInit } from '@angular/core';
import { BodySidenavService } from '../body-sidenav/body-sidenav.service';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private _bodySidenavService: BodySidenavService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public menuClick() {
    this._bodySidenavService.opening = !this._bodySidenavService.opening;
  }

  public logout() {
    this.authenticationService.logout();
  }
}
