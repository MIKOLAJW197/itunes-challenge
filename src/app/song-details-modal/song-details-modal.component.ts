import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Song} from '../shared/models/song.model';

@Component({
  selector: 'app-song-details-modal',
  templateUrl: './song-details-modal.component.html',
  styleUrls: ['./song-details-modal.component.scss']
})
export class SongDetailsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<SongDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Song) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
