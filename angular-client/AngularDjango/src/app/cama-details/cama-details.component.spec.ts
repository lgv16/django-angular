import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaDetailsComponent } from './cama-details.component';

describe('CamaDetailsComponent', () => {
  let component: CamaDetailsComponent;
  let fixture: ComponentFixture<CamaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
