import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodesavanjeComponent } from './podesavanje.component';

describe('PodesavanjeComponent', () => {
  let component: PodesavanjeComponent;
  let fixture: ComponentFixture<PodesavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodesavanjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodesavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
