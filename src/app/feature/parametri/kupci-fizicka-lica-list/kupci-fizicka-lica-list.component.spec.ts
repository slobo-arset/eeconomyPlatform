import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupciFizickaLicaListComponent } from './kupci-fizicka-lica-list.component';

describe('KupciFizickaLicaListComponent', () => {
  let component: KupciFizickaLicaListComponent;
  let fixture: ComponentFixture<KupciFizickaLicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupciFizickaLicaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupciFizickaLicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
