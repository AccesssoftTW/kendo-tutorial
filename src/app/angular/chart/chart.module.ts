import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularChartComponent } from './chart.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';

@NgModule({
  declarations: [AngularChartComponent],
  imports: [
    AngularMaterialModule
  ],
  exports:[
    AngularChartComponent
  ]
})
export class ChartModule { }
