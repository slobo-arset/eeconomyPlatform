import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlazneFaktureSingleComponent } from './ulazne-fakture-single.component';

describe('UlazneFaktureSingleComponent', () => {
  let component: UlazneFaktureSingleComponent;
  let fixture: ComponentFixture<UlazneFaktureSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlazneFaktureSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UlazneFaktureSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
