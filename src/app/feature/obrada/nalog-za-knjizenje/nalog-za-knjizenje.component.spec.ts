import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalogZaKnjizenjeComponent } from './nalog-za-knjizenje.component';

describe('NalogZaKnjizenjeComponent', () => {
  let component: NalogZaKnjizenjeComponent;
  let fixture: ComponentFixture<NalogZaKnjizenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalogZaKnjizenjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NalogZaKnjizenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
