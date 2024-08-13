import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpisRobeComponent } from './otpis-robe.component';

describe('OtpisRobeComponent', () => {
  let component: OtpisRobeComponent;
  let fixture: ComponentFixture<OtpisRobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpisRobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpisRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
