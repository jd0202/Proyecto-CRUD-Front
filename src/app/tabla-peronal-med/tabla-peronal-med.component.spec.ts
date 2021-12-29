import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeronalMedComponent } from './tabla-peronal-med.component';

describe('TablaPeronalMedComponent', () => {
  let component: TablaPeronalMedComponent;
  let fixture: ComponentFixture<TablaPeronalMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeronalMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPeronalMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
