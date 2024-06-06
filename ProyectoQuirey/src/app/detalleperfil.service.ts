import { Injectable } from '@angular/core';
import { ApiResponse, DetallePerfil } from './Models/detalleperfil.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetalleperfilService {
  private apiUrl = 'http://localhost:5020/api/DetallePerfil'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDetalleperfil(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetDetallePerfil`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarDetalleperfil(detalleperfilData: {
    IdPerfil: number;
    IdModulo: number;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      IdPerfil: detalleperfilData.IdPerfil,
      IdModulo: detalleperfilData.IdModulo, // Valor por defecto si no se proporciona
      Usuario: detalleperfilData.Usuario || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDetalleperfil(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteDetallePerfil`, { Id });
  }

  actualizarDetalleperfil(
    detalleperfilData: DetallePerfil
  ): Observable<ApiResponse> {
    const body = {
      id: detalleperfilData.Id,
      IdPerfil: detalleperfilData.IdPerfil,
      IdModulo: detalleperfilData.IdModulo,
      Usuario: detalleperfilData.Usuario || 0,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateDetallePerfil`,
      body
    );
  }
}
