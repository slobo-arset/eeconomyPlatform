import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorezneStopeEditComponent } from './porezne-stope-edit.component';

describe('PorezneStopeEditComponent', () => {
  let component: PorezneStopeEditComponent;
  let fixture: ComponentFixture<PorezneStopeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorezneStopeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorezneStopeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
