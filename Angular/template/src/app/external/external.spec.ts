import { ComponentFixture, TestBed } from '@angular/core/testing';

import { External } from './external';

describe('External', () => {
  let component: External;
  let fixture: ComponentFixture<External>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [External],
    }).compileComponents();

    fixture = TestBed.createComponent(External);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
