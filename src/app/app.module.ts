import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from './shared/material/material.module';
import {TopAuthorsListComponent} from './top-authors-list/top-authors-list.component';
import {TopSongsListComponent} from './top-songs-list/top-songs-list.component';
import {ApiService} from './shared/api.service';
import {HttpClientModule} from '@angular/common/http';
import {MainPageComponent} from './main-page/main-page.component';
import {LazyLoadImageModule, scrollPreset} from 'ng-lazyload-image';
import {SongMoreBottomComponent} from './song-more-bottom/song-more-bottom.component';
import {TopCategoriesListComponent} from './top-categories-list/top-categories-list.component';
import {FilteredSongsModalComponent} from './filtered-songs-modal/filtered-songs-modal.component';
import {SongDetailsModalComponent} from './song-details-modal/song-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopAuthorsListComponent,
    TopSongsListComponent,
    MainPageComponent,
    SongMoreBottomComponent,
    TopCategoriesListComponent,
    FilteredSongsModalComponent,
    SongDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [
    FilteredSongsModalComponent,
    SongMoreBottomComponent,
    SongDetailsModalComponent
  ]
})
export class AppModule {
}
