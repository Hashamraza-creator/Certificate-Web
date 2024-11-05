import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-certificates',
  standalone: true,
  templateUrl: './view-certificates.component.html',
  styleUrls: ['./view-certificates.component.scss'],
  imports: [CommonModule]  // Ensure CommonModule is imported here
})
export class ViewCertificatesComponent {
  certificates = [
    { title: 'Certificate 1', link: 'http://example.com/1', qrCode: 'QR1' },
    { title: 'Certificate 2', link: 'http://example.com/2', qrCode: 'QR2' }
    // Add more certificates as needed
  ];

  downloadCertificate(link: string) {
    // Logic to download certificate
    console.log('Downloading:', link);
  }
}
