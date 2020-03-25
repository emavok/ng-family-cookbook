import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchFilterComponent } from './recipe-search-filter.component';

describe('RecipeSearchFilterComponent', () => {
  let component: RecipeSearchFilterComponent;
  let fixture: ComponentFixture<RecipeSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
