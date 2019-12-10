import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid/grid.module';

@NgModule({
  declarations: [],
  imports: [
    GridModule,
    CommonModule
  ],
  exports:[GridModule]
})
export class VueModule { }
