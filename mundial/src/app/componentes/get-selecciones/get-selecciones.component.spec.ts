import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSeleccionesComponent } from './get-selecciones.component';

describe('GetSeleccionesComponent', () => {
  let component: GetSeleccionesComponent;
  let fixture: ComponentFixture<GetSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSeleccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
