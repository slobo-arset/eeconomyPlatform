import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloprodajnaKalkulacijaComponent } from './maloprodajna-kalkulacija.component';

describe('MaloprodajnaKalkulacijaComponent', () => {
  let component: MaloprodajnaKalkulacijaComponent;
  let fixture: ComponentFixture<MaloprodajnaKalkulacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaloprodajnaKalkulacijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloprodajnaKalkulacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
