import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzlaznaFakturaComponent } from './izlazna-faktura.component';

describe('IzlaznaFakturaComponent', () => {
  let component: IzlaznaFakturaComponent;
  let fixture: ComponentFixture<IzlaznaFakturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzlaznaFakturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzlaznaFakturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
