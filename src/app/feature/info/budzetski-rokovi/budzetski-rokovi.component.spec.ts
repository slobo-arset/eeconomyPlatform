import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudzetskiRokoviComponent } from './budzetski-rokovi.component';

describe('BudzetskiRokoviComponent', () => {
  let component: BudzetskiRokoviComponent;
  let fixture: ComponentFixture<BudzetskiRokoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudzetskiRokoviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudzetskiRokoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
