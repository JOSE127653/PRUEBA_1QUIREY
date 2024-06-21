import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Personas } from './Models/personas.models';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private apiUrl = 'http://localhost:5020/api/Personas'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetPersonas`,
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
    Direccion: String;
    sucursal: number;
    UsuarioActualiza: number;
    Rol: number;

  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      Nombre: departamentoData.Nombre,
      ApPaterno: departamentoData.ApPaterno,
      apmaterno: departamentoData.ApMaterno,
      Direccion: departamentoData.Direccion,
      sucursal: departamentoData.sucursal,
      UsuarioActualiza: departamentoData.UsuarioActualiza,
      Rol: departamentoData.Rol, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeletePersonas`, { Id });
  }

  actualizarDepartamento(departamentoData: Personas): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      Nombre: departamentoData.Nombre,
      ApPaterno: departamentoData.ApPaterno,
      ApMaterno: departamentoData.ApMaterno,
      UsuarioActualiza: departamentoData.UsuarioActualiza,
      Direccion: departamentoData.Direccion,
      sucursal: departamentoData.sucursal,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdatePersonas`,
      body
    );
  }
}
