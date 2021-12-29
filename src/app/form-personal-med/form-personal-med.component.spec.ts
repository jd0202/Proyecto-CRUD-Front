import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalMedComponent } from './form-personal-med.component';

describe('FormPersonalMedComponent', () => {
  let component: FormPersonalMedComponent;
  let fixture: ComponentFixture<FormPersonalMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonalMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonalMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
