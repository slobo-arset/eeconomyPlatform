import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvornaFakturaComponent } from './izvorna-faktura.component';

describe('IzvornaFakturaComponent', () => {
  let component: IzvornaFakturaComponent;
  let fixture: ComponentFixture<IzvornaFakturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvornaFakturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzvornaFakturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
