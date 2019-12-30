import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSongsModalComponent } from './filtered-songs-modal.component';

describe('FilteredSongsModalComponent', () => {
  let component: FilteredSongsModalComponent;
  let fixture: ComponentFixture<FilteredSongsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredSongsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredSongsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
