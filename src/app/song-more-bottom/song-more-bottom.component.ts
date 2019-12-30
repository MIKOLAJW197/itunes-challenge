import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {Song} from '../shared/models/song.model';

@Component({
  selector: 'app-song-more-bottom',
  templateUrl: './song-more-bottom.component.html',
  styleUrls: ['./song-more-bottom.component.scss']
})
export class SongMoreBottomComponent {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Song) {
  }
}
