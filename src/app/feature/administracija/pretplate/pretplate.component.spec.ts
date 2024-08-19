import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretplateComponent } from './pretplate.component';

describe('PretplateComponent', () => {
  let component: PretplateComponent;
  let fixture: ComponentFixture<PretplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PretplateComponent]
    });
    fixture = TestBed.createComponent(PretplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
