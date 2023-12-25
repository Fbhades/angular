import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      tap((user: any) => {
        if (user.length === 1) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }),
      catchError(() => {
        this.isAuthenticated = false;
        return of(false);
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
  }

  IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

