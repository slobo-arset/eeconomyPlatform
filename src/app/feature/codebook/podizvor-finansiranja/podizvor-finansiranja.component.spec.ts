import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodizvorFinansiranjaComponent } from './podizvor-finansiranja.component';

describe('PodizvorFinansiranjaComponent', () => {
  let component: PodizvorFinansiranjaComponent;
  let fixture: ComponentFixture<PodizvorFinansiranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodizvorFinansiranjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodizvorFinansiranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
