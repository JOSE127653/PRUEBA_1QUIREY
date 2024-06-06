import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, UnidadMedida } from './Models/unidadmedida.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class UnidadmedidaService {
  private apiUrl = 'http://localhost:5020/api/UnidadMedida'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_UnidadMedida`,
      requestBody
    );
  }

  getDropDownText(IdUnidadMedida: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdUnidadMedida;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Nombre: string;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombre: departamentoData.Nombre, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_UnidadMedida`, { Id });
  }

  actualizarDepartamento(
    departamentoData: UnidadMedida
  ): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      nombre: departamentoData.Nombre,

      usuarioactualiza: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Update_UnidadMedida`,
      body
    );
  }
}
