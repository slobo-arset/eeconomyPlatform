import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatorComponent } from './informator.component';

describe('InformatorComponent', () => {
  let component: InformatorComponent;
  let fixture: ComponentFixture<InformatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
