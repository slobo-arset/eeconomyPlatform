import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativiComponent } from './normativi.component';

describe('NormativiComponent', () => {
  let component: NormativiComponent;
  let fixture: ComponentFixture<NormativiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormativiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
