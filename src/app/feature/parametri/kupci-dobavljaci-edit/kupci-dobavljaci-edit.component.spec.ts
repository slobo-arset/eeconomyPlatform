import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciDobavljaciEditComponent } from './kupci-dobavljaci-edit.component';

describe('KupciDobavljaciEditComponent', () => {
  let component: KupciDobavljaciEditComponent;
  let fixture: ComponentFixture<KupciDobavljaciEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciDobavljaciEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupciDobavljaciEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
