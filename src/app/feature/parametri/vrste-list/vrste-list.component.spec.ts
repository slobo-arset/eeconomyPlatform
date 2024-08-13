import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteListComponent } from './vrste-list.component';

describe('VrsteListComponent', () => {
  let component: VrsteListComponent;
  let fixture: ComponentFixture<VrsteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrsteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrsteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
