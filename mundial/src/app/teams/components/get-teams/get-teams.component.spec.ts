import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeamsComponent } from './get-teams.component';

describe('GetTeamsComponent', () => {
  let component: GetTeamsComponent;
  let fixture: ComponentFixture<GetTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
