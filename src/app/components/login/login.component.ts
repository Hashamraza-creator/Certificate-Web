import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    keepLoggedIn: new FormControl(false)
  });

  passType = 'password';

  changeVisibility() {
    this.passType = this.passType === 'password' ? 'text' : 'password';
    console.log(this.passType);
  }

  loginService = inject(LoginService);
  router = inject(Router);
  errorMessage = ''; // To display an error message if needed

  onSubmit() {
    const { username, password, keepLoggedIn } = this.loginForm.value;

    if (username && password) {
      if (this.loginService.loginUser({ username, password })) {
        this.router.navigate(['/admin']); // Use Angular's router for navigation
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      this.errorMessage = 'All fields are required';
    }
  }
}
