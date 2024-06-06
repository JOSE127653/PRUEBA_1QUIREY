import { Injectable } from '@angular/core';
import { ApiResponse, clientes } from './Models/clientes.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'http://localhost:5020/api/Clientes'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getClientes(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_Clientes`,
      requestBody
    );
  }

  getDropDownText(IdClientes: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdClientes;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarClientes(clientesData: {
    Nombre: string;
    Direccion: string;
    UsuarioActualiza: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombre: clientesData.Nombre,
      direccion: clientesData.Direccion, // Valor por defecto si no se proporciona
      usuarioactualiza: clientesData.UsuarioActualiza || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarClientes(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_Clientes`, { Id });
  }

  actualizarClientes(clientesData: clientes): Observable<ApiResponse> {
    const body = {
      id: clientesData.Id,
      nombre: clientesData.Nombre,
      direccion: clientesData.Direccion,

      usuarioactualiza: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/Update_Clientes`, body);
  }
}
