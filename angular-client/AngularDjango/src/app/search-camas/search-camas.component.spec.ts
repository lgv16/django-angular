import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCamasComponent } from './search-camas.component';

describe('SearchCamasComponent', () => {
  let component: SearchCamasComponent;
  let fixture: ComponentFixture<SearchCamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
