import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJugadoresComponent } from './get-jugadores.component';

describe('GetJugadoresComponent', () => {
  let component: GetJugadoresComponent;
  let fixture: ComponentFixture<GetJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
