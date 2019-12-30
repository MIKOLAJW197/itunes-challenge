import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSongsListComponent } from './top-songs-list.component';

describe('TopSongsListComponent', () => {
  let component: TopSongsListComponent;
  let fixture: ComponentFixture<TopSongsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSongsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
