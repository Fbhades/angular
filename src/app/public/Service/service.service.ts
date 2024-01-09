import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private user="http://localhost:3000/users";

  users:any[]=[];

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.user).pipe(
      map((data) => {
        this.users = data;
        const user = data.find((u: any) => u.username === username && u.password === password);

        if (user) {
          window.localStorage.setItem('accessToken', user.accessToken);
          window.localStorage.setItem('userId', user.id);
          window.localStorage.setItem('userRole', user.role);
          return true; 
        } else {
          return false; 
        }
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return throwError('Login failed'); 
      })
    );
  }

  logout(): void {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('userRole');
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('accessToken');
  }

  getUsers(){
    return this.users;
  }

  getUserRole() {
    return window.localStorage.getItem('userRole');
  }
  finduser(){
    return window.localStorage.getItem('userId');
}
addFormation(formationId: string) {
  let id=this.finduser();
  this.http.get<any>(`${this.user}/${id}`).subscribe((user: any) => {
    user.formations.push(formationId);
    this.http.put(`${this.user}/${id}`, user).subscribe();
  });
}

getFormations(): Observable<string[]> {
  let id=this.finduser();
  return this.http.get<any>(`${this.user}/${id}`).pipe(
    map((user) => user.formations || []))
  }

deleteUser(userId: number): Observable<any> {
    const url = `${this.user}/${userId}`;
    return this.http.delete(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError('User deletion failed');
      })
    );
  }

  editUser(id: any): Observable<any> {
    const url = `${this.user}/${id}`;
    return this.http.put(url, url).pipe(
      catchError((error) => {
        console.error('Error updating user:', error);
        return throwError('User update failed');
      })
    );
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.user, user).pipe(
      catchError((error) => {
        console.error('Error adding user:', error);
        return throwError('User addition failed');
      })
    );
  }
}
