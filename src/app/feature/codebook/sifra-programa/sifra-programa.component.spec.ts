import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SifraProgramaComponent } from './sifra-programa.component';

describe('SifraProgramaComponent', () => {
  let component: SifraProgramaComponent;
  let fixture: ComponentFixture<SifraProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SifraProgramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SifraProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
