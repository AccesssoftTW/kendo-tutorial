import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid/grid.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { InputModule } from './input/input.module';
import { ChartModule } from './chart/chart.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule,
    SchedulerModule,
    InputModule,
    ChartModule
  ],
  exports: [
    GridModule,
    SchedulerModule,
    InputModule,
    ChartModule
  ]
})
export class AngularModule { }
