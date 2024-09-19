import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlazneFaktureComponent } from './ulazne-fakture.component';

describe('UlazneFaktureComponent', () => {
  let component: UlazneFaktureComponent;
  let fixture: ComponentFixture<UlazneFaktureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlazneFaktureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UlazneFaktureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
