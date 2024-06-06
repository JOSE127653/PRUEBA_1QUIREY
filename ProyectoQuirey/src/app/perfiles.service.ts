import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Perfiles } from './Models/perfiles.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class PerfilesService {
  private apiUrl = 'http://localhost:5020/api/Perfiles'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_Perfiles`,
      requestBody
    );
  }

  getDropDownText(IdPerfiles: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdPerfiles;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Nombre: string;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombre: departamentoData.Nombre, // Valor por defecto si no se proporciona
      usuario: departamentoData.Usuario || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_Perfiles`, { Id });
  }

  actualizarDepartamento(departamentoData: Perfiles): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      nombre: departamentoData.Nombre,
      usuario: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateAlmacenes`, body);
  }
}
