import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoluproizvodiComponent } from './poluproizvodi.component';

describe('PoluproizvodiComponent', () => {
  let component: PoluproizvodiComponent;
  let fixture: ComponentFixture<PoluproizvodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoluproizvodiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoluproizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
