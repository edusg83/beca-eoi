import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTeamComponent } from './post-team.component';

describe('PostTeamComponent', () => {
  let component: PostTeamComponent;
  let fixture: ComponentFixture<PostTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
