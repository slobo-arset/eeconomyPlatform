import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloprodajnaKalkulacijaListaComponent } from './maloprodajna-kalkulacija-lista.component';

describe('MaloprodajnaKalkulacijaListaComponent', () => {
  let component: MaloprodajnaKalkulacijaListaComponent;
  let fixture: ComponentFixture<MaloprodajnaKalkulacijaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaloprodajnaKalkulacijaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloprodajnaKalkulacijaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
