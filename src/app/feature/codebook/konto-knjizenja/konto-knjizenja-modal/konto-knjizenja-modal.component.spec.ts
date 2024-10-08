import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoKnjizenjaModalComponent } from './konto-knjizenja-modal.component';

describe('KontoKnjizenjaModalComponent', () => {
  let component: KontoKnjizenjaModalComponent;
  let fixture: ComponentFixture<KontoKnjizenjaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontoKnjizenjaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KontoKnjizenjaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
