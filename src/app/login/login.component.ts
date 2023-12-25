import { Component } from '@angular/core';
import { AuthService } from '../Service/service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (success) => {
        if (success) {
          this.router.navigate(['Home']);
        } else {
          this.router.navigate(['Formation']);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
