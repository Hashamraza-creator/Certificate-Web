import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCertificatesComponent } from './view-certificates.component';

describe('ViewCertificatesComponent', () => {
  let component: ViewCertificatesComponent;
  let fixture: ComponentFixture<ViewCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
