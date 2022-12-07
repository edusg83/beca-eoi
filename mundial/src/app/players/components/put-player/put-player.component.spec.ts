import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPlayerComponent } from './put-player.component';

describe('PutPlayerComponent', () => {
  let component: PutPlayerComponent;
  let fixture: ComponentFixture<PutPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
