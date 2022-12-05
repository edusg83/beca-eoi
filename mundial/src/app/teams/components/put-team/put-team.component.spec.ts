import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTeamComponent } from './put-team.component';

describe('PutTeamComponent', () => {
  let component: PutTeamComponent;
  let fixture: ComponentFixture<PutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
