import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-management',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './template-management.component.html',
  styleUrl: './template-management.component.scss'
})
export class TemplateManagementComponent {

  certificates = [
    { id: 1, title: 'Certificate 1', status: 'pending', employee: 'Employee A', customized: false },
    { id: 2, title: 'Certificate 2', status: 'pending', employee: 'Employee B', customized: false },
  ];

  approveCertificate(id: number) {
    const certificate = this.certificates.find(cert => cert.id === id);
    if (certificate) {
      certificate.status = 'approved';
      // Generate QR Code and permanent link here
    }
  }

  rejectCertificate(id: number) {
    const certificate = this.certificates.find(cert => cert.id === id);
    if (certificate) {
      certificate.status = 'rejected';
    }
  }

  customizeCertificate(id: number) {
    const certificate = this.certificates.find(cert => cert.id === id);
    if (certificate) {
      certificate.customized = true; // Logic to customize the certificate
    }
  }


}
