import { Routes } from '@angular/router';
import { TemplateManagementComponent } from './components/admin/template-management/template-management.component';
import { ApprovalComponent } from './components/admin/approval/approval.component';
import { CertificateListComponent } from './components/admin/certificate-list/certificate-list.component';
import { EmployeeSelectionComponent } from './components/manager/employee-selection/employee-selection.component';
import { CustomizeCertificateComponent } from './components/manager/customize-certificate/customize-certificate.component';
import { SubmitCertificateComponent } from './components/manager/submit-certificate/submit-certificate.component';
import { AwardedCertificatesComponent } from './components/employee/awarded-certificates/awarded-certificates.component';
import { CertificateVerificationComponent } from './components/employee/certificate-verification/certificate-verification.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Protect admin routes with the authGuard
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  { path: 'admin/template-management', component: TemplateManagementComponent, canActivate: [authGuard] },
  { path: 'admin/approval', component: ApprovalComponent, canActivate: [authGuard] },
  { path: 'admin/certificate-list', component: CertificateListComponent, canActivate: [authGuard] },

  // Manager routes (no guard applied, assuming not restricted)
  { path: 'manager/employee-selection', component: EmployeeSelectionComponent },
  { path: 'manager/customize-certificate', component: CustomizeCertificateComponent },
  { path: 'manager/submit-certificate', component: SubmitCertificateComponent },

  // Employee routes (no guard applied)
  { path: 'employee/awarded-certificates', component: AwardedCertificatesComponent },
  { path: 'employee/certificate-verification', component: CertificateVerificationComponent },

  // Public routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
