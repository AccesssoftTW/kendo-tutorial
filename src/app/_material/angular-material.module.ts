import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatBottomSheetModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatBottomSheetModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatBottomSheetModule
  ]
})
export class AngularMaterialModule { }
