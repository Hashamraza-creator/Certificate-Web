import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  admins = [
    { username: 'Jai Kumar', password: 'typeprittier' }
  ];

  loginUser(credentials: any): boolean {
    const admin = this.admins.find((admin) => 
      admin.username === credentials.username && admin.password === credentials.password
    );
    this.isLoggedIn = !!admin;
    return this.isLoggedIn;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
