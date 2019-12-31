import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Song} from '../shared/models/song.model';
import {MatDialog} from '@angular/material';
import {FilteredSongsModalComponent} from '../filtered-songs-modal/filtered-songs-modal.component';

@Component({
  selector: 'app-top-categories-list',
  templateUrl: './top-categories-list.component.html',
  styleUrls: ['./top-categories-list.component.scss']
})
export class TopCategoriesListComponent {

  @Input() categoriesList: Set<string>;
  @Input() songsList: Song[];
  @ViewChild('scrollCategory', {static: false}) scrollBar: ElementRef;

  constructor(public dialog: MatDialog) {
  }

  onCategoryClick(category: string): void {
    this.dialog.open(FilteredSongsModalComponent, {
      width: '600px',
      data: {name: category, songs: this.songsList.filter(s => s.details.category === category)}
    });
  }


  scroll(value: string) {
    this.scrollBar.nativeElement.scrollLeft += value === 'left' ? -100 : 100;
  }
}
