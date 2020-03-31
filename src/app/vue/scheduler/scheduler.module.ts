import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueSchedulerComponent } from './scheduler.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';


@NgModule({
  declarations: [VueSchedulerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SchedulerModule { }
