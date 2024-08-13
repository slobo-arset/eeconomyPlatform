import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikliListComponent } from './artikli-list.component';

describe('ArtikliListComponent', () => {
  let component: ArtikliListComponent;
  let fixture: ComponentFixture<ArtikliListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikliListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
