import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuzComponent } from './luz.component';

describe('LuzComponent', () => {
  let component: LuzComponent;
  let fixture: ComponentFixture<LuzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuzComponent]
    });
    fixture = TestBed.createComponent(LuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
