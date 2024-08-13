import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodniProcesComponent } from './proizvodni-proces.component';

describe('ProizvodniProcesComponent', () => {
  let component: ProizvodniProcesComponent;
  let fixture: ComponentFixture<ProizvodniProcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodniProcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProizvodniProcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
