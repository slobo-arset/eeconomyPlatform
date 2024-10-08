import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifraProgramaModalComponent } from './sifra-programa-modal.component';

describe('SifraProgramaModalComponent', () => {
  let component: SifraProgramaModalComponent;
  let fixture: ComponentFixture<SifraProgramaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SifraProgramaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SifraProgramaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
