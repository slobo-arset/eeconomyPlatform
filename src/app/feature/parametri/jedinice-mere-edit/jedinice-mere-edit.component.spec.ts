import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediniceMereEditComponent } from './jedinice-mere-edit.component';

describe('JediniceMereEditComponent', () => {
  let component: JediniceMereEditComponent;
  let fixture: ComponentFixture<JediniceMereEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JediniceMereEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JediniceMereEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
