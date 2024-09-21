import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaknadaNezaposleniComponent } from './naknada-nezaposleni.component';

describe('NaknadaNezaposleniComponent', () => {
  let component: NaknadaNezaposleniComponent;
  let fixture: ComponentFixture<NaknadaNezaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaknadaNezaposleniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaknadaNezaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
