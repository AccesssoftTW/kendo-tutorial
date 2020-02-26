import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { IgxGridModule } from 'igniteui-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [MemberComponent],
  imports: [
    CommonModule,
    IgxGridModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MemberModule { }
