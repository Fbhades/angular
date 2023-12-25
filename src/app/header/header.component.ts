import { Component } from '@angular/core';
import { AuthService } from '../Service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  isCandidat(): boolean {
    return this.authService.getUserRole() === "candidat";
  }

  isFormateur(): boolean {
    return this.authService.getUserRole() === "formateur";
  }
  isadmin():boolean{
    return this.authService.getUserRole()==="admin";
  }
}

