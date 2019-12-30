import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopAuthorsListComponent} from './top-authors-list.component';

describe('TopAuthorsListComponent', () => {
  let component: TopAuthorsListComponent;
  let fixture: ComponentFixture<TopAuthorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopAuthorsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
