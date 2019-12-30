import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Song} from '../shared/models/song.model';

export interface DialogData {
  name: string;
  songs: Song[];
}

@Component({
  selector: 'app-filtered-songs-modal',
  templateUrl: './filtered-songs-modal.component.html',
  styleUrls: ['./filtered-songs-modal.component.scss']
})
export class FilteredSongsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<FilteredSongsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
