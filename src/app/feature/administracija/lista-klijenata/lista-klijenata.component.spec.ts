import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlijenataComponent } from './lista-klijenata.component';

describe('ListaKlijenataComponent', () => {
  let component: ListaKlijenataComponent;
  let fixture: ComponentFixture<ListaKlijenataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKlijenataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaKlijenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
