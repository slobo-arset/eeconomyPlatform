import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorezNaPotrosnjuListComponent } from './porez-na-potrosnju-list.component';

describe('PorezNaPotrosnjuListComponent', () => {
  let component: PorezNaPotrosnjuListComponent;
  let fixture: ComponentFixture<PorezNaPotrosnjuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorezNaPotrosnjuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorezNaPotrosnjuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
