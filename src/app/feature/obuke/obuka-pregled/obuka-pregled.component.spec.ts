import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObukaPregledComponent } from './obuka-pregled.component';

describe('ObukaPregledComponent', () => {
  let component: ObukaPregledComponent;
  let fixture: ComponentFixture<ObukaPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObukaPregledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObukaPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
