import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCertificateComponent } from './submit-certificate.component';

describe('SubmitCertificateComponent', () => {
  let component: SubmitCertificateComponent;
  let fixture: ComponentFixture<SubmitCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
