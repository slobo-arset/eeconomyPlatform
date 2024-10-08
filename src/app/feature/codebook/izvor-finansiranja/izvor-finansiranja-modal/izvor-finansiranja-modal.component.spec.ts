import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvorFinansiranjaModalComponent } from './izvor-finansiranja-modal.component';

describe('IzvorFinansiranjaModalComponent', () => {
  let component: IzvorFinansiranjaModalComponent;
  let fixture: ComponentFixture<IzvorFinansiranjaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzvorFinansiranjaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IzvorFinansiranjaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
