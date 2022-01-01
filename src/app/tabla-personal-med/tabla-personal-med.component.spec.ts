import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonalMedComponent } from './tabla-personal-med.component';

describe('TablaPeronalMedComponent', () => {
  let component: TablaPersonalMedComponent;
  let fixture: ComponentFixture<TablaPersonalMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPersonalMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPersonalMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
