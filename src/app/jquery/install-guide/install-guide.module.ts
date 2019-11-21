import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallGuideComponent } from './install-guide.component';

@NgModule({
  declarations: [InstallGuideComponent],
  imports: [
    CommonModule
  ],
  exports: [InstallGuideComponent]
})
export class InstallGuideModule { }
