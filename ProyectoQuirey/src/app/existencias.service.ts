import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Existencias } from './Models/existencias.models';

@Injectable({
  providedIn: 'root',
})
export class ExistenciasService {
  private apiUrl = 'http://localhost:5020/api/Existencias'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetExistencias`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Codigo: string;
    IdAlmacen: number;
    Cantidad: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      codigo: departamentoData.Codigo,
      idalmacen: departamentoData.IdAlmacen,
      cantidad: departamentoData.Cantidad,
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  actualizarDepartamento(
    departamentoData: Existencias
  ): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      codigo: departamentoData.Codigo,
      idalmacen: departamentoData.IdAlmacen,
      cantidad: departamentoData.Cantidad,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateExistencias`,
      body
    );
  }
}
