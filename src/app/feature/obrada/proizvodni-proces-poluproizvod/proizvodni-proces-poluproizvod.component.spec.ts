import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodniProcesPoluproizvodComponent } from './proizvodni-proces-poluproizvod.component';

describe('ProizvodniProcesPoluproizvodComponent', () => {
  let component: ProizvodniProcesPoluproizvodComponent;
  let fixture: ComponentFixture<ProizvodniProcesPoluproizvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodniProcesPoluproizvodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProizvodniProcesPoluproizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
