import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardedCertificatesComponent } from './awarded-certificates.component';

describe('AwardedCertificatesComponent', () => {
  let component: AwardedCertificatesComponent;
  let fixture: ComponentFixture<AwardedCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardedCertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardedCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
