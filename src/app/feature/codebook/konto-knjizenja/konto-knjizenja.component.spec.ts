import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoKnjizenjaComponent } from './konto-knjizenja.component';

describe('KontoKnjizenjaComponent', () => {
  let component: KontoKnjizenjaComponent;
  let fixture: ComponentFixture<KontoKnjizenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontoKnjizenjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontoKnjizenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
