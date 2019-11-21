import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodySidenavDataService {

  constructor() { }

  public getSessionList() {
    return [
      {
        id: 1,
        name: 'Jquery',
        lists: [
          {
            name: '環境準備',
            route: '/jquery/install-guide'
          },
          {
            name: '表單',
            route: '/jquery/register-form'
          },
          {
            name: 'Grid',
            route: '/jquery/grid'
          },
          {
            name: '圖表',
            route: '/jquery/chart'
          }
        ]
      },
      {
        id: 2,
        name: 'Angular',
        lists: [
          {
            name: 'Grid',
            route: '/angular/grid'
          },
        ]
      },
      {
        id: 3,
        name: 'React',
        lists: []
      },
      {
        id: 4,
        name: 'Vue',
        lists: []
      }
    ];
  }
}
