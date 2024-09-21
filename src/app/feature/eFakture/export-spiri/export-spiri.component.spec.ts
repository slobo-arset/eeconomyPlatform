import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSpiriComponent } from './export-spiri.component';

describe('ExportSpiriComponent', () => {
  let component: ExportSpiriComponent;
  let fixture: ComponentFixture<ExportSpiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportSpiriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportSpiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
