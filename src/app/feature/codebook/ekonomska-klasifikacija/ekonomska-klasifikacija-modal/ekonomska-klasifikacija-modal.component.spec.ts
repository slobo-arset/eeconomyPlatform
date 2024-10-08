import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkonomskaKlasifikacijaModalComponent } from './ekonomska-klasifikacija-modal.component';

describe('EkonomskaKlasifikacijaModalComponent', () => {
  let component: EkonomskaKlasifikacijaModalComponent;
  let fixture: ComponentFixture<EkonomskaKlasifikacijaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkonomskaKlasifikacijaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkonomskaKlasifikacijaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
