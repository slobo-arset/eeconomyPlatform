import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihodiVanRadnogOdnosaComponent } from './prihodi-van-radnog-odnosa.component';

describe('PrihodiVanRadnogOdnosaComponent', () => {
  let component: PrihodiVanRadnogOdnosaComponent;
  let fixture: ComponentFixture<PrihodiVanRadnogOdnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrihodiVanRadnogOdnosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrihodiVanRadnogOdnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
