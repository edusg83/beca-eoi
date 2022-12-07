import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJugadoresComponent } from './delete-jugadores.component';

describe('DeleteJugadoresComponent', () => {
  let component: DeleteJugadoresComponent;
  let fixture: ComponentFixture<DeleteJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
