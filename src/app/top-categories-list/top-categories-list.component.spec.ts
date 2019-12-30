import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoriesListComponent } from './top-categories-list.component';

describe('TopCategoriesListComponent', () => {
  let component: TopCategoriesListComponent;
  let fixture: ComponentFixture<TopCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
