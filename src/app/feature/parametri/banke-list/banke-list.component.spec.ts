import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeListComponent } from './banke-list.component';

describe('BankeListComponent', () => {
  let component: BankeListComponent;
  let fixture: ComponentFixture<BankeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
