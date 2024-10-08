import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifraProjektaComponent } from './sifra-projekta.component';

describe('SifraProjektaComponent', () => {
  let component: SifraProjektaComponent;
  let fixture: ComponentFixture<SifraProjektaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SifraProjektaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SifraProjektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
