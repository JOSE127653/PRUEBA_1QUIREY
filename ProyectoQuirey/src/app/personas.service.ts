import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Personas } from './Models/personas.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private apiUrl = 'http://localhost:5020/api/PersonaPrincipal'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_PersonaPrincipal`,
      requestBody
    );
  }

  getDropDownText(IdPersonas: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdPersonas;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Nombre: String;
    ApPaterno: String;
    ApMaterno: String;
    Curp: String;
    Direccion: String;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      Nombre: departamentoData.Nombre,
      ApPaterno: departamentoData.ApPaterno,
      apmaterno: departamentoData.ApMaterno,
      Curp: departamentoData.Curp,
      Direccion: departamentoData.Direccion,
      Usuario: departamentoData.Usuario, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_Clientes`, { Id });
  }

  actualizarDepartamento(departamentoData: Personas): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      Nombre: departamentoData.Nombre,
      ApPaterno: departamentoData.ApPaterno,
      ApMaterno: departamentoData.ApMaterno,
      Curp: departamentoData.curp,
      Direccion: departamentoData.Direccion,

      Usuario: departamentoData.Usuario,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Update_PersonaPrincipal`,
      body
    );
  }
}
