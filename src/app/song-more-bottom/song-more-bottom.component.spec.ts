import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongMoreBottomComponent } from './song-more-bottom.component';

describe('SongMoreBottomComponent', () => {
  let component: SongMoreBottomComponent;
  let fixture: ComponentFixture<SongMoreBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongMoreBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongMoreBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
