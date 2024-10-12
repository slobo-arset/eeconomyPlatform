import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObukaAdminPregledComponent } from './obuka-admin-pregled.component';

describe('ObukaAdminPregledComponent', () => {
  let component: ObukaAdminPregledComponent;
  let fixture: ComponentFixture<ObukaAdminPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObukaAdminPregledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObukaAdminPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
