import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkladistaListComponent } from './skladista-list.component';

describe('SkladistaListComponent', () => {
  let component: SkladistaListComponent;
  let fixture: ComponentFixture<SkladistaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkladistaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkladistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
