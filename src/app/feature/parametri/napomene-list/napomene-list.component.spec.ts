import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapomeneListComponent } from './napomene-list.component';

describe('NapomeneListComponent', () => {
  let component: NapomeneListComponent;
  let fixture: ComponentFixture<NapomeneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapomeneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapomeneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
