import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzlazneFaktureComponent } from './izlazne-fakture.component';

describe('IzlazneFaktureComponent', () => {
  let component: IzlazneFaktureComponent;
  let fixture: ComponentFixture<IzlazneFaktureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzlazneFaktureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IzlazneFaktureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
