import { Routes } from '@angular/router';
import { TemplateManagementComponent } from './admin/template-management/template-management.component';
import { ApprovalComponent } from './admin/approval/approval.component';
import { CertificateListComponent } from './admin/certificate-list/certificate-list.component';
import { EmployeeSelectionComponent } from './manager/employee-selection/employee-selection.component';
import { CustomizeCertificateComponent } from './manager/customize-certificate/customize-certificate.component';
import { SubmitCertificateComponent } from './manager/submit-certificate/submit-certificate.component';
import { AwardedCertificatesComponent } from './employee/awarded-certificates/awarded-certificates.component';
import { CertificateVerificationComponent } from './employee/certificate-verification/certificate-verification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  { path: 'admin/template-management', component: TemplateManagementComponent },
  { path: 'admin/approval', component: ApprovalComponent },
  { path: 'admin/certificate-list', component: CertificateListComponent },
  
  { path: 'manager/employee-selection', component: EmployeeSelectionComponent },
  { path: 'manager/customize-certificate', component: CustomizeCertificateComponent },
  { path: 'manager/submit-certificate', component: SubmitCertificateComponent },
  
  { path: 'employee/awarded-certificates', component: AwardedCertificatesComponent },
  { path: 'employee/certificate-verification', component: CertificateVerificationComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default redirect to login
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];
