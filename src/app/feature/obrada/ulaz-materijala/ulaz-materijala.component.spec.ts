import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlazMaterijalaComponent } from './ulaz-materijala.component';

describe('UlazMaterijalaComponent', () => {
  let component: UlazMaterijalaComponent;
  let fixture: ComponentFixture<UlazMaterijalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlazMaterijalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlazMaterijalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
