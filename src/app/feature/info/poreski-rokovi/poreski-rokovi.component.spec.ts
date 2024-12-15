import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoreskiRokoviComponent } from './poreski-rokovi.component';

describe('PoreskiRokoviComponent', () => {
  let component: PoreskiRokoviComponent;
  let fixture: ComponentFixture<PoreskiRokoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoreskiRokoviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoreskiRokoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
