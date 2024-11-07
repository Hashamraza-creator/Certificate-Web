import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCertificateComponent } from './customize-certificate.component';

describe('CustomizeCertificateComponent', () => {
  let component: CustomizeCertificateComponent;
  let fixture: ComponentFixture<CustomizeCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
