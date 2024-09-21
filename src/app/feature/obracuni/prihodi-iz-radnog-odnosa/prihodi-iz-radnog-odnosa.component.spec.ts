import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihodiIzRadnogOdnosaComponent } from './prihodi-iz-radnog-odnosa.component';

describe('PrihodiIzRadnogOdnosaComponent', () => {
  let component: PrihodiIzRadnogOdnosaComponent;
  let fixture: ComponentFixture<PrihodiIzRadnogOdnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrihodiIzRadnogOdnosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrihodiIzRadnogOdnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
