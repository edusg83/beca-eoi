import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutJugadoresComponent } from './put-jugadores.component';

describe('PutJugadoresComponent', () => {
  let component: PutJugadoresComponent;
  let fixture: ComponentFixture<PutJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
