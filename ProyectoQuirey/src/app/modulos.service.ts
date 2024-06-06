import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Modulos } from './Models/modulos.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ModulosService {
  private apiUrl = 'http://localhost:5020/api/Modulos'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetModulos`,
      requestBody
    );
  }

  getDropDownText(IdModulos: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdModulos;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Modulo: string;
    Usuario: number;
    IdCategoria: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      Modulo: departamentoData.Modulo,
      Usuario: departamentoData.Usuario || 0, // Valor por defecto si no se proporciona
      IdCategoria: departamentoData.IdCategoria || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteModulos`, { Id });
  }

  actualizarDepartamento(departamentoData: Modulos): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      modulo: departamentoData.Modulo,

      usuario: departamentoData.Usuario || 0,
      idcategoria: departamentoData.IdCategoria || 0,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateModulos`, body);
  }
}
