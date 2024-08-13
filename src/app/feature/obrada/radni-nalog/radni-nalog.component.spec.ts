import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadniNalogComponent } from './radni-nalog.component';

describe('RadniNalogComponent', () => {
  let component: RadniNalogComponent;
  let fixture: ComponentFixture<RadniNalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadniNalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadniNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
