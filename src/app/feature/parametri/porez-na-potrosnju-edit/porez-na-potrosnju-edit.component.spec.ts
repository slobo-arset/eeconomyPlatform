import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorezNaPotrosnjuEditComponent } from './porez-na-potrosnju-edit.component';

describe('PorezNaPotrosnjuEditComponent', () => {
  let component: PorezNaPotrosnjuEditComponent;
  let fixture: ComponentFixture<PorezNaPotrosnjuEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorezNaPotrosnjuEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorezNaPotrosnjuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
