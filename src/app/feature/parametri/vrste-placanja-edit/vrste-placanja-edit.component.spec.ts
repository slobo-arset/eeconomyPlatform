import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrstePlacanjaEditComponent } from './vrste-placanja-edit.component';

describe('VrstePlacanjaEditComponent', () => {
  let component: VrstePlacanjaEditComponent;
  let fixture: ComponentFixture<VrstePlacanjaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrstePlacanjaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrstePlacanjaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
