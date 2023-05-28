import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadAmbienteComponent } from './humedad-ambiente.component';

describe('HumedadAmbienteComponent', () => {
  let component: HumedadAmbienteComponent;
  let fixture: ComponentFixture<HumedadAmbienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumedadAmbienteComponent]
    });
    fixture = TestBed.createComponent(HumedadAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
