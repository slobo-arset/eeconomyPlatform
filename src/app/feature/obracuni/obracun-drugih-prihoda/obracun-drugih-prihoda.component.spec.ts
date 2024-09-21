import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObracunDrugihPrihodaComponent } from './obracun-drugih-prihoda.component';

describe('ObracunDrugihPrihodaComponent', () => {
  let component: ObracunDrugihPrihodaComponent;
  let fixture: ComponentFixture<ObracunDrugihPrihodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObracunDrugihPrihodaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObracunDrugihPrihodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
