import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledMaloprodajnihRacunaComponent } from './pregled-maloprodajnih-racuna.component';

describe('PregledMaloprodajnihRacunaComponent', () => {
  let component: PregledMaloprodajnihRacunaComponent;
  let fixture: ComponentFixture<PregledMaloprodajnihRacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledMaloprodajnihRacunaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregledMaloprodajnihRacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
