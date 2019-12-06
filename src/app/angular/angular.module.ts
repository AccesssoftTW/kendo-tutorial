import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid/grid.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule,
    SchedulerModule
  ],
  exports: [
    GridModule,
    SchedulerModule]
})
export class AngularModule { }
