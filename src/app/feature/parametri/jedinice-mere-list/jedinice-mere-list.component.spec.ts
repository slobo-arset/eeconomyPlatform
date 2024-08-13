import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediniceMereListComponent } from './jedinice-mere-list.component';

describe('JediniceMereListComponent', () => {
  let component: JediniceMereListComponent;
  let fixture: ComponentFixture<JediniceMereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JediniceMereListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JediniceMereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
