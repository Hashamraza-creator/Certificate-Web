import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    agreeToTerms: new FormControl(false)
  });

  passType = 'password';

  changeVisibility() {
    this.passType = this.passType === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup successful!', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
