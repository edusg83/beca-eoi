import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeleccionesComponent } from './delete-selecciones.component';

describe('DeleteSeleccionesComponent', () => {
  let component: DeleteSeleccionesComponent;
  let fixture: ComponentFixture<DeleteSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSeleccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
