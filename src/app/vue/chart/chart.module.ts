import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueChartComponent } from './chart.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';

@NgModule({
  declarations: [VueChartComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ChartModule { }
