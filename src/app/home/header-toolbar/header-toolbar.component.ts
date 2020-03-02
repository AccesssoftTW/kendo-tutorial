import { Component, OnInit } from '@angular/core';
import { BodySidenavService } from '../body-sidenav/body-sidenav.service';
import { AuthenticationService } from 'src/app/_service/authentication.service';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet, 
    private _bodySidenavService: BodySidenavService, 
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public openBottomSheet(): void {
    this._bottomSheet.open(ContactInfoComponent);
  }

  public menuClick() {
    this._bodySidenavService.opening = !this._bodySidenavService.opening;
  }

  public logout() {
    this.authenticationService.logout();
  }
}
