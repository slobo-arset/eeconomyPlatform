import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeEditComponent } from './banke-edit.component';

describe('BankeEditComponent', () => {
  let component: BankeEditComponent;
  let fixture: ComponentFixture<BankeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
