import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObukaListaComponent } from './obuka-lista.component';

describe('ObukaListaComponent', () => {
  let component: ObukaListaComponent;
  let fixture: ComponentFixture<ObukaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObukaListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObukaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
