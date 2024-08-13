import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloprodajnaNivelacijaComponent } from './maloprodajna-nivelacija.component';

describe('MaloprodajnaNivelacijaComponent', () => {
  let component: MaloprodajnaNivelacijaComponent;
  let fixture: ComponentFixture<MaloprodajnaNivelacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaloprodajnaNivelacijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloprodajnaNivelacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
