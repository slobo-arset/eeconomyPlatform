import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeleprodajnaNivelacijaComponent } from './veleprodajna-nivelacija.component';

describe('VeleprodajnaNivelacijaComponent', () => {
  let component: VeleprodajnaNivelacijaComponent;
  let fixture: ComponentFixture<VeleprodajnaNivelacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeleprodajnaNivelacijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeleprodajnaNivelacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
