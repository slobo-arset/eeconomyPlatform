import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvorFinansiranjaComponent } from './izvor-finansiranja.component';

describe('IzvorFinansiranjaComponent', () => {
  let component: IzvorFinansiranjaComponent;
  let fixture: ComponentFixture<IzvorFinansiranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzvorFinansiranjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IzvorFinansiranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
