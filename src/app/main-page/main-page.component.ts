import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {map} from 'rxjs/operators';
import {Song} from '../shared/models/song.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private apiService: ApiService,
              public snackBar: MatSnackBar) {
  }

  isLoading = true;
  songsList: Song[] = [];
  categoriesList = new Set<string>();
  authorsList = new Set<string>();

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.apiService.getTop100Songs()
      .pipe(
        map(response => response.feed.entry),
        map(responseList => this.getSongList(responseList))
      )
      .subscribe(songModelList => {
          this.songsList = songModelList;
          this.authorsList = this.getAllAuthors(this.songsList);
          this.categoriesList = this.getAllCategories(this.songsList);
          this.isLoading = false;
        },
        error => this.snackBar.open('Error! Please reload!', '', {
          duration: 5000
        }));
  }

  private getSongList(list: any[]): Song[] {
    return list.map(r => this.getSongModel(r));
  }

  private getAllAuthors(songsList: Song[]): Set<string> {
    return new Set(songsList.map(song => song.author));
  }

  private getAllCategories(songsList: Song[]): Set<string> {
    return new Set(songsList.map(song => song.details.category));
  }

  private getSongModel(song: any): Song {
    return {
      id: song.id.attributes['im:id'],
      title: song['im:name'].label,
      author: song['im:artist'].label,
      img: song['im:image'] ? song['im:image'][1].label : '',
      details: {
        category: song.category.attributes.term,
        price: song['im:price'].label,
        rights: song.rights.label,
        date: song['im:releaseDate'].label
      },
      isLoved: false
    };
  }

}
