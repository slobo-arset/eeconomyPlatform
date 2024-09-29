import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugihPrihodaVanRadnogOdnosaComponent } from './drugih-prihoda-van-radnog-odnosa.component';

describe('DrugihPrihodaVanRadnogOdnosaComponent', () => {
  let component: DrugihPrihodaVanRadnogOdnosaComponent;
  let fixture: ComponentFixture<DrugihPrihodaVanRadnogOdnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugihPrihodaVanRadnogOdnosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrugihPrihodaVanRadnogOdnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
