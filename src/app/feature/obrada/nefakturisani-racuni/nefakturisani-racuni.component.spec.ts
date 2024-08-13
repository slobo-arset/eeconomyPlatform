import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NefakturisaniRacuniComponent } from './nefakturisani-racuni.component';

describe('NefakturisaniRacuniComponent', () => {
  let component: NefakturisaniRacuniComponent;
  let fixture: ComponentFixture<NefakturisaniRacuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NefakturisaniRacuniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NefakturisaniRacuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
