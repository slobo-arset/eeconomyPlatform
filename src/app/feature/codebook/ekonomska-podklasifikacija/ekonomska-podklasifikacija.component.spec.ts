import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkonomskaPodklasifikacijaComponent } from './ekonomska-podklasifikacija.component';

describe('EkonomskaPodklasifikacijaComponent', () => {
  let component: EkonomskaPodklasifikacijaComponent;
  let fixture: ComponentFixture<EkonomskaPodklasifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkonomskaPodklasifikacijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkonomskaPodklasifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
