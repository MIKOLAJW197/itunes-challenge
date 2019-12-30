import {Component, Input} from '@angular/core';
import {Song} from '../shared/models/song.model';
import {SongMoreBottomComponent} from '../song-more-bottom/song-more-bottom.component';
import {MatBottomSheet, MatDialog} from '@angular/material';
import {SongDetailsModalComponent} from '../song-details-modal/song-details-modal.component';

@Component({
  selector: 'app-top-songs-list',
  templateUrl: './top-songs-list.component.html',
  styleUrls: ['./top-songs-list.component.scss']
})
export class TopSongsListComponent {

  @Input() songsList: Song[];
  query: any;

  constructor(public bottomSheet: MatBottomSheet,
              public modalDialog: MatDialog) {
  }

  openDetails(song: Song) {
    this.modalDialog.open(SongDetailsModalComponent, {data: song});
  }

  onLoveSong(e: Event, song: Song) {
    e.stopPropagation();
    song.isLoved = !song.isLoved;
  }

  openBottomSheet(e: Event, song: Song) {
    e.stopPropagation();
    this.bottomSheet.open(SongMoreBottomComponent, {data: song});
  }
}
