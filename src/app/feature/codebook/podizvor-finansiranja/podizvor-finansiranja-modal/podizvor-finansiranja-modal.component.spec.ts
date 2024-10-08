import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodizvorFinansiranjaModalComponent } from './podizvor-finansiranja-modal.component';

describe('PodizvorFinansiranjaModalComponent', () => {
  let component: PodizvorFinansiranjaModalComponent;
  let fixture: ComponentFixture<PodizvorFinansiranjaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodizvorFinansiranjaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PodizvorFinansiranjaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
