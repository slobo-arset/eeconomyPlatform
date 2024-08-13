import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventuraComponent } from './inventura.component';

describe('InventuraComponent', () => {
  let component: InventuraComponent;
  let fixture: ComponentFixture<InventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
