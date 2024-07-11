import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './Models/Login.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { login} from './Models/Login.models';  // Asegúrate de que la ruta es correcta
import { tap } from 'rxjs/operators'; // Importa el operador tap
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5020/api';
  private currentUser: string | null = null;
  constructor(private http: HttpClient) { }

  login(login: login): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/SignIn`, login, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap((response: ApiResponse) => {
        if (response.success && response.token) {
          localStorage.setItem('authToken', response.token); // Guarda el token de autenticación
          this.currentUser = login.idUsername;
          localStorage.setItem('currentUser', login.idUsername); // Guarda el nombre de usuario
        }
      })
    );
  }
  
  logout(): void {
    // Lógica para cerrar sesión, como eliminar tokens de autenticación almacenados
    localStorage.removeItem('authToken'); // Ejemplo de eliminación de un token
  }
  getCurrentUser(): string | null {
    return this.currentUser || localStorage.getItem('currentUser');
  }
}


