import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { MemberService } from './member.service';
import { User } from './user';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @ViewChild('gridRowEdit', { read: IgxGridComponent, static: false }) public gridRowEdit: IgxGridComponent;
  // @ViewChild("#gridRowEditTransaction", {}) public grid: IgxGridComponent;
  @ViewChild('gridRowEditTransaction', { read: IgxGridComponent, static: false }) grid: IgxGridComponent;

  public data: any[];

  constructor(private memberService: MemberService) {

  }

  ngOnInit() {
    this.memberService.getAllUser().subscribe(
      users => {
        users.forEach(x => {
          x.expire_at = new Date(x.expire_at);
        });
        this.data = users;
      }
    );

  }

  AddRow() {
    const record = new User();
    record.ID = 0;
    record.account = '';
    record.name = '';
    record.account = '';
    record.password = '';
    record.phone_number = '';
    record.expire_at = new Date();
    this.grid.addRow(record);
  }

  EditDone(e) {

    console.log(e);
    if (e.rowID) {

    } else {
      console.log(e.newValue);

      this.memberService.addUser(e.newValue).subscribe(
        (user: User) => {
          this.grid.data.map((x: User) => {
            if (x.ID === 0) {
              user.expire_at = new Date(user.expire_at);
              Object.assign(x, user);
              this.grid.refreshGridState();
            }
          });

        }
      );
    }
  }

}
