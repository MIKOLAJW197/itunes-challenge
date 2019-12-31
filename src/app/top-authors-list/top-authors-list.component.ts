import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Song} from '../shared/models/song.model';
import {MatDialog} from '@angular/material';
import {FilteredSongsModalComponent} from '../filtered-songs-modal/filtered-songs-modal.component';

@Component({
  selector: 'app-top-authors-list',
  templateUrl: './top-authors-list.component.html',
  // Use same stylesheet
  styleUrls: ['../top-categories-list/top-categories-list.component.scss']
})
export class TopAuthorsListComponent implements OnInit {

  @Input() authorsList: Set<string>;
  @Input() songsList: Song[];
  @ViewChild('scrollAuthor', {static: false}) scrollBar: ElementRef;

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

  scroll(value: string) {
    this.scrollBar.nativeElement.scrollLeft += value === 'left' ? -100 : 100;
  }
}
