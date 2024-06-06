import { Injectable } from '@angular/core';
import { ApiResponse, Modulousuarios } from './Models/modulosusuarios.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ModulosusuarioService {
  private apiUrl = 'http://localhost:5020/api/ModulosUsuario';

  constructor(private http: HttpClient) {}

  getusuarios(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetModulosUsuario`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarusuarios(usuariosData: {
    IdPerfil: number;
    IdModulo: number;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      IdPerfil: usuariosData.IdPerfil,
      IdModulo: usuariosData.IdModulo, // Valor por defecto si no se proporciona
      Usuario: usuariosData.Usuario,
      // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarusuarios(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteModulosUsuario`, { Id });
  }

  actualizarusuarios(usuariosData: Modulousuarios): Observable<ApiResponse> {
    const body = {
      id: usuariosData.Id,
      IdModulo: usuariosData.IdModulo,
      IdPerfil: usuariosData.idPerfil,
      Usuario: usuariosData.Usuario,
      
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateModulosUsuario`,
      body
    );
  }
}
