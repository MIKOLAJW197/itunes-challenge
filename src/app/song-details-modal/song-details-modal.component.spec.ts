import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsModalComponent } from './song-details-modal.component';

describe('SongDetailsModalComponent', () => {
  let component: SongDetailsModalComponent;
  let fixture: ComponentFixture<SongDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
