import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupeEditComponent } from './grupe-edit.component';

describe('GrupeEditComponent', () => {
  let component: GrupeEditComponent;
  let fixture: ComponentFixture<GrupeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
