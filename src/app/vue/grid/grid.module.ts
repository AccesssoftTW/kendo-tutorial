import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueGridComponent } from './grid.component';
import { FilterComponent } from './components/filter/filter.component';
import { GroupComponent } from './components/group/group.component';
import { SortComponent } from './components/sort/sort.component';
import { EditComponent } from './components/edit/edit.component';
import { ExportComponent } from './components/export/export.component';
import { PageComponent } from './components/page/page.component';
import { AngularMaterialModule } from 'src/app/_material/angular-material.module';


@NgModule({
  declarations: [VueGridComponent, FilterComponent, GroupComponent, SortComponent, EditComponent, ExportComponent, PageComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class GridModule { }
