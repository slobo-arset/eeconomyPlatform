import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpLoginComponent } from './cp-login.component';

describe('CpLoginComponent', () => {
  let component: CpLoginComponent;
  let fixture: ComponentFixture<CpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
