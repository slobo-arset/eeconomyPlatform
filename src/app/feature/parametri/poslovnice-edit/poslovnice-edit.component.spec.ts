import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovniceEditComponent } from './poslovnice-edit.component';

describe('PoslovniceEditComponent', () => {
  let component: PoslovniceEditComponent;
  let fixture: ComponentFixture<PoslovniceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoslovniceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoslovniceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
