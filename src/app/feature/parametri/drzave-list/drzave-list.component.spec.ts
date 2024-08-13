import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveListComponent } from './drzave-list.component';

describe('DrzaveListComponent', () => {
  let component: DrzaveListComponent;
  let fixture: ComponentFixture<DrzaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrzaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
