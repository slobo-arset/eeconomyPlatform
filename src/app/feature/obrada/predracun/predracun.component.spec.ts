import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredracunComponent } from './predracun.component';

describe('PredracunComponent', () => {
  let component: PredracunComponent;
  let fixture: ComponentFixture<PredracunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredracunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredracunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
