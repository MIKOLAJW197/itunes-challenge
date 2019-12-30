import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../shared/models/song.model';
import {MatDialog} from '@angular/material';
import {FilteredSongsModalComponent} from '../filtered-songs-modal/filtered-songs-modal.component';

@Component({
  selector: 'app-top-authors-list',
  templateUrl: './top-authors-list.component.html',
  styleUrls: ['./top-authors-list.component.scss']
})
export class TopAuthorsListComponent implements OnInit {

  @Input() authorsList: Set<string>;
  @Input() songsList: Song[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onAuthorClick(author: string): void {
    this.dialog.open(FilteredSongsModalComponent, {
      width: '600px',
      data: {name: author, songs: this.songsList.filter(s => s.author === author)}
    });
  }
}
