import { NgModule } from '@angular/core';
import { AngularGridComponent } from './grid.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';
import { HtmlComponent } from './components/html/html.component';

@NgModule({
  declarations: [AngularGridComponent, HtmlComponent],
  imports: [AngularMaterialModule],
  exports: [AngularGridComponent]
})
export class GridModule { }
