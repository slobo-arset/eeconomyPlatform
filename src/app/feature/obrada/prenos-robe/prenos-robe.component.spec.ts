import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenosRobeComponent } from './prenos-robe.component';

describe('PrenosRobeComponent', () => {
  let component: PrenosRobeComponent;
  let fixture: ComponentFixture<PrenosRobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenosRobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenosRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
