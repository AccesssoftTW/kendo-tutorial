import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BodySidenavDataService {

  constructor(private authenticationService: AuthenticationService) { }

  public getKendoList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '環境準備',
            route: '/home/jquery-install-guide'
          },
          {
            name: '表單',
            route: '/home/jquery-register-form'
          },
          {
            name: 'Grid',
            route: '/home/jquery-grid'
          },
          {
            name: '圖表',
            route: '/home/jquery-chart'
          }
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: [
          {
            name: 'Grid',
            route: '/home/angular-grid'
          },
          {
            name: '行事歷',
            route: '/home/angular-scheduler'
          },
          {
            name: '表單元件',
            route: '/home/angular-input'
          },
          {
            name: '圖表',
            route: '/home/angular-chart'
          },
        ]
      },
      {
        id: 3,
        name: 'Vue',
        lists: [
          {
            name: 'Grid',
            route: '/home/vue-grid'
          },
          {
            name: '圖表',
            route: '/home/vue-chart'
          },
          {
            name: '表單',
            route: '/home/vue-form'
          },
          {
            name: '行事曆',
            route: '/home/vue-scheduler'
          },
        ]
      }
    ];
  }

  public getProductsList() {
    const list = [{ text: 'Kendo', value: 'kendo' }, { text: 'Infragistics', value: 'infragistics' }];

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.account === 'admin') {
      list.push({ text: 'Admin', value: 'admin' });
    }

    return list;
  }

  public getInfragisticsList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      },
      {
        id: 3,
        name: 'Vue',
        lists: [
          {
            name: '準備中',
            route: ''
          },
        ]
      }
    ];
  }

  public getAdminList() {
    return [
      {
        id: 1,
        name: '用戶',
        lists: [
          {
            name: '帳號設定',
            route: '/home/admin-member-management'
          },
        ]
      },
    ];
  }
}
