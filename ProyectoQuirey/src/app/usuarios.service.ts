import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Usuario } from './Models/usuarios.models';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = 'http://localhost:5020/api/UsuariosUno'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetUsuario`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    NombreUsuario: string;
    Password: string;
    Rol: string;
    UsuarioActualiza: string;
    IdPersona: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombreusuario: departamentoData.NombreUsuario,
      Rol: departamentoData.Rol,
      UsuarioActualiza: departamentoData.UsuarioActualiza,
      Password: departamentoData.Password, // Valor por defecto si no se proporciona
      IdPersona: departamentoData.IdPersona || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteUsuariosUno`, { Id });
  }

  actualizarDepartamento(departamentoData: Usuario): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      nombreusuario: departamentoData.NombreUsuario,
      Rol: departamentoData.Rol,
      UsuarioActualiza: departamentoData.UsuarioActualiza,
      password: departamentoData.Password,
      idpersona: departamentoData.IdPersona,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateUsuariosUno`,
      body
    );
  }
}
