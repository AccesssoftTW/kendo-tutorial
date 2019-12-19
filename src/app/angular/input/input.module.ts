import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { AngularInputComponent } from './input.component';

@NgModule({
  declarations: [AngularInputComponent],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularInputComponent
  ]
})
export class InputModule { }
