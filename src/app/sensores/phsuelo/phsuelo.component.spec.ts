import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHsueloComponent } from './phsuelo.component';

describe('PHsueloComponent', () => {
  let component: PHsueloComponent;
  let fixture: ComponentFixture<PHsueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PHsueloComponent]
    });
    fixture = TestBed.createComponent(PHsueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
