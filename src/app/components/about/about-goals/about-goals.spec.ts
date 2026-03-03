import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGoals } from './about-goals';

describe('AboutGoals', () => {
  let component: AboutGoals;
  let fixture: ComponentFixture<AboutGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
