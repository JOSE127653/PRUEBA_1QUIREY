import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Almacenes } from './Models/almacenes.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class AlmacenesService {
  private apiUrl = 'http://localhost:5020/api/Almacenes'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetAlmacen`,
      requestBody
    );
  }

  getDropDownText(IdAlmacen: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdAlmacen;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Nombre: string;
    Direccion: string;
    UsuarioActualiza: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombre: departamentoData.Nombre,
      direccion: departamentoData.Direccion, // Valor por defecto si no se proporciona
      usuarioactualiza: departamentoData.UsuarioActualiza || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteAlmacenes`, { Id });
  }

  actualizarDepartamento(departamentoData: Almacenes): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      nombre: departamentoData.Nombre,
      direccion: departamentoData.Direccion,

      usuarioactualiza: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateAlmacenes`, body);
  }
}
