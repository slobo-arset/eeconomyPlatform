import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvPrijavaComponent } from './pdv-prijava.component';

describe('PdvPrijavaComponent', () => {
  let component: PdvPrijavaComponent;
  let fixture: ComponentFixture<PdvPrijavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdvPrijavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdvPrijavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
