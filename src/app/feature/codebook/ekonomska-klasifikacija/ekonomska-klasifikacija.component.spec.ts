import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkonomskaKlasifikacijaComponent } from './ekonomska-klasifikacija.component';

describe('EkonomskaKlasifikacijaComponent', () => {
  let component: EkonomskaKlasifikacijaComponent;
  let fixture: ComponentFixture<EkonomskaKlasifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkonomskaKlasifikacijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkonomskaKlasifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
