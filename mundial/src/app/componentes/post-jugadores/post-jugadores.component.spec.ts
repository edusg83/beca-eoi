import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJugadoresComponent } from './post-jugadores.component';

describe('PostJugadoresComponent', () => {
  let component: PostJugadoresComponent;
  let fixture: ComponentFixture<PostJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostJugadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
