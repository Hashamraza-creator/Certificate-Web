interface Certificate {
  title: string;
  link: string;
  qrCode: string;
}

export class ViewCertificatesComponent {
  certificates: Certificate[] = [
    { title: 'Certificate 1', link: 'http://example.com/1', qrCode: 'QR1' },
    { title: 'Certificate 2', link: 'http://example.com/2', qrCode: 'QR2' }
    // Add more certificates as needed
  ];

  downloadCertificate(link: string) {
    // Logic to download certificate
    console.log('Downloading:', link);
  }
}
