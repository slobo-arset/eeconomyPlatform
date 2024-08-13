import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrstePlacanjaListComponent } from './vrste-placanja-list.component';

describe('VrstePlacanjaListComponent', () => {
  let component: VrstePlacanjaListComponent;
  let fixture: ComponentFixture<VrstePlacanjaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrstePlacanjaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrstePlacanjaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
