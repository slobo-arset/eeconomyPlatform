import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapomeneEditComponent } from './napomene-edit.component';

describe('NapomeneEditComponent', () => {
  let component: NapomeneEditComponent;
  let fixture: ComponentFixture<NapomeneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapomeneEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapomeneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
