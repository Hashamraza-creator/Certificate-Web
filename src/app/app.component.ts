import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CertificateListComponent } from './admin/certificate-list/certificate-list.component';
import { TemplateManagementComponent } from './admin/template-management/template-management.component';
import { ViewCertificatesComponent } from './admin/view-certificates/view-certificates.component';
import { ApprovalComponent } from './admin/approval/approval.component';  // Ensure correct path


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoginComponent, CertificateListComponent, TemplateManagementComponent, ViewCertificatesComponent, ApprovalComponent, ]
})
export class AppComponent {
  title = 'certificate-allotment';
}
