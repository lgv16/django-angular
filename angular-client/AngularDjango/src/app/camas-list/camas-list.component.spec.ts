import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasListComponent } from './camas-list.component';

describe('CamasListComponent', () => {
  let component: CamasListComponent;
  let fixture: ComponentFixture<CamasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
