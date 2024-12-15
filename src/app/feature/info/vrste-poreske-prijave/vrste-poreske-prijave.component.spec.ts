import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrstePoreskePrijaveComponent } from './vrste-poreske-prijave.component';

describe('VrstePoreskePrijaveComponent', () => {
  let component: VrstePoreskePrijaveComponent;
  let fixture: ComponentFixture<VrstePoreskePrijaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrstePoreskePrijaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VrstePoreskePrijaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
