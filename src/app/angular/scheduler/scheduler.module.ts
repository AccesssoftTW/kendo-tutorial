import { NgModule } from '@angular/core';
import { AngularSchedulerComponent } from './scheduler.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { HtmlComponent } from './components/html/html.component';
import { TsComponent } from './components/ts/ts.component';
import { ModuleComponent } from './components/module/module.component';

@NgModule({
  declarations: [AngularSchedulerComponent, HtmlComponent, TsComponent, ModuleComponent],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularSchedulerComponent
  ]
})
export class SchedulerModule { }
