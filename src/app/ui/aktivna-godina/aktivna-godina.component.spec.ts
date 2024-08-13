import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivnaGodinaComponent } from './aktivna-godina.component';

describe('AktivnaGodinaComponent', () => {
  let component: AktivnaGodinaComponent;
  let fixture: ComponentFixture<AktivnaGodinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktivnaGodinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktivnaGodinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
