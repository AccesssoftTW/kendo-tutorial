import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueFormComponent } from './form.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';

@NgModule({
  declarations: [VueFormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class FormModule { }
