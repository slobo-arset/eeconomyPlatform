import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjiznoOdobrenjeComponent } from './knjizno-odobrenje.component';

describe('KnjiznoOdobrenjeComponent', () => {
  let component: KnjiznoOdobrenjeComponent;
  let fixture: ComponentFixture<KnjiznoOdobrenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjiznoOdobrenjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnjiznoOdobrenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
