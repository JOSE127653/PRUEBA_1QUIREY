import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './Models/Login.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login} from './Models/Login.models';  // Asegúrate de que la ruta es correcta

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5020/api/';

  constructor(private http: HttpClient) { }

  login(login: login): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse>(`${this.apiUrl}/SignIn`, login, { headers });
  }
  
}

