import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslovniceListComponent } from './poslovnice-list.component';

describe('PoslovniceListComponent', () => {
  let component: PoslovniceListComponent;
  let fixture: ComponentFixture<PoslovniceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoslovniceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoslovniceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
