import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEspecializacionComponent } from './tabla-especializacion.component';

describe('TablaEspecializacionComponent', () => {
  let component: TablaEspecializacionComponent;
  let fixture: ComponentFixture<TablaEspecializacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEspecializacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEspecializacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
