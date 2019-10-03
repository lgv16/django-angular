import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCamaComponent } from './create-cama.component';

describe('CreateCamaComponent', () => {
  let component: CreateCamaComponent;
  let fixture: ComponentFixture<CreateCamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
