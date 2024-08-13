import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeleprodajnaKalkulacijaComponent } from './veleprodajna-kalkulacija.component';

describe('VeleprodajnaKalkulacijaComponent', () => {
  let component: VeleprodajnaKalkulacijaComponent;
  let fixture: ComponentFixture<VeleprodajnaKalkulacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeleprodajnaKalkulacijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeleprodajnaKalkulacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
