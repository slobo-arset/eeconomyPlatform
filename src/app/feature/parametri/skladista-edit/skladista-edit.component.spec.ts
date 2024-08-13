import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkladistaEditComponent } from './skladista-edit.component';

describe('SkladistaEditComponent', () => {
  let component: SkladistaEditComponent;
  let fixture: ComponentFixture<SkladistaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkladistaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkladistaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
