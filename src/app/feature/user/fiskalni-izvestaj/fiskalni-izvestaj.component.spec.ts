import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiskalniIzvestajComponent } from './fiskalni-izvestaj.component';

describe('FiskalniIzvestajComponent', () => {
  let component: FiskalniIzvestajComponent;
  let fixture: ComponentFixture<FiskalniIzvestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiskalniIzvestajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiskalniIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
