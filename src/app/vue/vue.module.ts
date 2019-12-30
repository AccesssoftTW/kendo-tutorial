import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid/grid.module';
import { FormModule } from './form/form.module';
import { ChartModule } from './chart/chart.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [],
  imports: [
    GridModule,
    CommonModule,
    ChartModule,
    FormModule,
    SchedulerModule
  ],
  exports: [
    GridModule,
    ChartModule,
    FormModule,
    SchedulerModule
  ]
})
export class VueModule { }
