import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PovratRobeComponent } from './povrat-robe.component';

describe('PovratRobeComponent', () => {
  let component: PovratRobeComponent;
  let fixture: ComponentFixture<PovratRobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PovratRobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PovratRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
