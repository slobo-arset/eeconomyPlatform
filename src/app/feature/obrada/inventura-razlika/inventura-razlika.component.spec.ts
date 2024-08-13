import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventuraRazlikaComponent } from './inventura-razlika.component';

describe('InventuraRazlikaComponent', () => {
  let component: InventuraRazlikaComponent;
  let fixture: ComponentFixture<InventuraRazlikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventuraRazlikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventuraRazlikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
