import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObukaAdminListaComponent } from './obuka-admin-lista.component';

describe('ObukaAdminListaComponent', () => {
  let component: ObukaAdminListaComponent;
  let fixture: ComponentFixture<ObukaAdminListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObukaAdminListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObukaAdminListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
