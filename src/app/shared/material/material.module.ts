import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class MaterialModule {
}
