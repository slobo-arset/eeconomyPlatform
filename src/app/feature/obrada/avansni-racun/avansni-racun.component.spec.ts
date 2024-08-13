import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvansniRacunComponent } from './avansni-racun.component';

describe('AvansniRacunComponent', () => {
  let component: AvansniRacunComponent;
  let fixture: ComponentFixture<AvansniRacunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvansniRacunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvansniRacunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
