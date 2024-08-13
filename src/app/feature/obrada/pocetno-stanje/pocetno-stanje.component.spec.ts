import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnoStanjeComponent } from './pocetno-stanje.component';

describe('PocetnoStanjeComponent', () => {
  let component: PocetnoStanjeComponent;
  let fixture: ComponentFixture<PocetnoStanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocetnoStanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocetnoStanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
