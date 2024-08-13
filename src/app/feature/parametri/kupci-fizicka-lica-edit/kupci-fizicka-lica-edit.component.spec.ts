import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciFizickaLicaEditComponent } from './kupci-fizicka-lica-edit.component';

describe('KupciFizickaLicaEditComponent', () => {
  let component: KupciFizickaLicaEditComponent;
  let fixture: ComponentFixture<KupciFizickaLicaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciFizickaLicaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupciFizickaLicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
