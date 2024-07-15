import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse2 } from './Models/Login.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthInfo} from './Models/Login.models';  // Asegúrate de que la ruta es correcta
import { tap } from 'rxjs/operators'; // Importa el operador tap
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5020/api'; // Ajusta la URL según corresponda

  constructor(private http: HttpClient) {}

  SignIn(authInfo: AuthInfo): Observable<ApiResponse2> {
    return this.http.post<ApiResponse2>(`${this.apiUrl}/SignIn`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}


