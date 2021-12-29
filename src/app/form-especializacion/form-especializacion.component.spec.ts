import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEspecializacionComponent } from './form-especializacion.component';

describe('FormEspecializacionComponent', () => {
  let component: FormEspecializacionComponent;
  let fixture: ComponentFixture<FormEspecializacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEspecializacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEspecializacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
