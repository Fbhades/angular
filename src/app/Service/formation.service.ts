import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/service.service';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private formationsUrl = 'http://localhost:3000/formations';
  constructor(private http: HttpClient) {}

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(this.formationsUrl);
  }

  getFormationById(formationId: any): Observable<any> {
    const url = `${this.formationsUrl}/${formationId}`;
    return this.http.get<any>(url);
  }
  }





