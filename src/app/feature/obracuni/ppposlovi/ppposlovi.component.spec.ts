import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpposloviComponent } from './ppposlovi.component';

describe('PpposloviComponent', () => {
  let component: PpposloviComponent;
  let fixture: ComponentFixture<PpposloviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpposloviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PpposloviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
