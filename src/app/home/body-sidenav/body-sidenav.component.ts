import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BodySidenavService } from "./body-sidenav.service";
import { Subscription } from "rxjs/internal/Subscription";
import { BodySidenavDataService } from "./body-sidenav-data.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-body-sidenav",
  templateUrl: "./body-sidenav.component.html",
  styleUrls: ["./body-sidenav.component.scss"]
})
export class BodySidenavComponent implements OnInit {
  public panelOpenState = true;
  private openingSubscription: Subscription;
  public sessionListDatas;
  @ViewChild("top", { static: true }) element: ElementRef;

  constructor(
    private _bodySidenavService: BodySidenavService,
    private _bodySidenavDataService: BodySidenavDataService,
    private router: Router
  ) {
    // router.events.subscribe((val) => {
    //   // see also
    //   console.log(val instanceof NavigationEnd);
    // });

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        console.log(e);
        (<HTMLElement>this.element.nativeElement).scrollIntoView();
      });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.sessionListDatas = this._bodySidenavDataService.getSessionList();

    this.openingSubscription = this._bodySidenavService.openingStatus.subscribe(
      x => {
        this.panelOpenState = x;
      }
    );
  }
}
