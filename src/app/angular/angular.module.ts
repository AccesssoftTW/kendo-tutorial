import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid/grid.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule,
    SchedulerModule,
    InputModule
  ],
  exports: [
    GridModule,
    SchedulerModule,
    InputModule
  ]
})
export class AngularModule { }
