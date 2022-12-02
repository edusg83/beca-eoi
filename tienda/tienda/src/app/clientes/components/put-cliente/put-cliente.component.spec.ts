import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutClienteComponent } from './put-cliente.component';

describe('PutClienteComponent', () => {
  let component: PutClienteComponent;
  let fixture: ComponentFixture<PutClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
