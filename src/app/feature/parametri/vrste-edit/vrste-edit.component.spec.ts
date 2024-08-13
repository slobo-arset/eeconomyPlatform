import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteEditComponent } from './vrste-edit.component';

describe('VrsteEditComponent', () => {
  let component: VrsteEditComponent;
  let fixture: ComponentFixture<VrsteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrsteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrsteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
