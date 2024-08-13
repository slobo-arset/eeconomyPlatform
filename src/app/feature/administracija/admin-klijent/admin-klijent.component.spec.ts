import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKlijentComponent } from './admin-klijent.component';

describe('AdminKlijentComponent', () => {
  let component: AdminKlijentComponent;
  let fixture: ComponentFixture<AdminKlijentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKlijentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminKlijentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
