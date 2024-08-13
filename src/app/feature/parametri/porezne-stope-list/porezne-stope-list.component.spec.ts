import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorezneStopeListComponent } from './porezne-stope-list.component';

describe('PorezneStopeListComponent', () => {
  let component: PorezneStopeListComponent;
  let fixture: ComponentFixture<PorezneStopeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorezneStopeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorezneStopeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
