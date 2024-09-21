import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaknadaZaradeComponent } from './naknada-zarade.component';

describe('NaknadaZaradeComponent', () => {
  let component: NaknadaZaradeComponent;
  let fixture: ComponentFixture<NaknadaZaradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaknadaZaradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaknadaZaradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
