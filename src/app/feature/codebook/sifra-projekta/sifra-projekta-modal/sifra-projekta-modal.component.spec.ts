import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifraProjektaModalComponent } from './sifra-projekta-modal.component';

describe('SifraProjektaModalComponent', () => {
  let component: SifraProjektaModalComponent;
  let fixture: ComponentFixture<SifraProjektaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SifraProjektaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SifraProjektaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
