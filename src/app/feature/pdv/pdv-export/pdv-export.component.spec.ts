import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvExportComponent } from './pdv-export.component';

describe('PdvExportComponent', () => {
  let component: PdvExportComponent;
  let fixture: ComponentFixture<PdvExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdvExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdvExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
