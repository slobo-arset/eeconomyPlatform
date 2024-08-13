import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciDobavljaciListComponent } from './kupci-dobavljaci-list.component';

describe('KupciDobavljaciListComponent', () => {
  let component: KupciDobavljaciListComponent;
  let fixture: ComponentFixture<KupciDobavljaciListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciDobavljaciListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupciDobavljaciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
