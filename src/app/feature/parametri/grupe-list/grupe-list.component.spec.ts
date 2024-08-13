import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupeListComponent } from './grupe-list.component';

describe('GrupeListComponent', () => {
  let component: GrupeListComponent;
  let fixture: ComponentFixture<GrupeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
