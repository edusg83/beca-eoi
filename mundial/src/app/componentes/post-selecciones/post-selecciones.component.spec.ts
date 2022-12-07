import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeleccionesComponent } from './post-selecciones.component';

describe('PostSeleccionesComponent', () => {
  let component: PostSeleccionesComponent;
  let fixture: ComponentFixture<PostSeleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSeleccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
