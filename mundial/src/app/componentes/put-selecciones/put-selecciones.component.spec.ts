import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutSeleccionesComponent } from './put-selecciones.component';

describe('PutSeleccionesComponent', () => {
  let component: PutSeleccionesComponent;
  let fixture: ComponentFixture<PutSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutSeleccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
