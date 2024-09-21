import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaknadaTroskovaZaposlenihComponent } from './naknada-troskova-zaposlenih.component';

describe('NaknadaTroskovaZaposlenihComponent', () => {
  let component: NaknadaTroskovaZaposlenihComponent;
  let fixture: ComponentFixture<NaknadaTroskovaZaposlenihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaknadaTroskovaZaposlenihComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaknadaTroskovaZaposlenihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
