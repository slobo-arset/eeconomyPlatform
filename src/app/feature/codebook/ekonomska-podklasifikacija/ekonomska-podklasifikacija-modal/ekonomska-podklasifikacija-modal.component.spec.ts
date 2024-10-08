import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkonomskaPodklasifikacijaModalComponent } from './ekonomska-podklasifikacija-modal.component';

describe('EkonomskaPodklasifikacijaModalComponent', () => {
  let component: EkonomskaPodklasifikacijaModalComponent;
  let fixture: ComponentFixture<EkonomskaPodklasifikacijaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkonomskaPodklasifikacijaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkonomskaPodklasifikacijaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
