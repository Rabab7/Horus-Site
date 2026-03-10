import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partnership } from './partnership';

describe('Partnership', () => {
  let component: Partnership;
  let fixture: ComponentFixture<Partnership>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partnership]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partnership);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
