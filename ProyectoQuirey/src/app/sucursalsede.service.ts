import { Injectable } from '@angular/core';
import { ApiResponse, Sucursalsede } from './Models/sucursalsede.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class SucursalsedeService {
  private apiUrl = 'http://localhost:5020/api/SucursalSede';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_SucursalSede`,
      requestBody
    );
  }

  getDropDownText(IdSucursalSede: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdSucursalSede;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarTickets(ticketsData: {
    Nombre: string;
    Ubicacion: string;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      nombre: ticketsData.Nombre,
      Ubicacion: ticketsData.Ubicacion,
      usuario: ticketsData.Usuario || 0, // Valor por defecto si no se proporciona
    };

    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);

    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarTickets(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_SucursalSede`, { Id });
  }

  actualizarTickets(ticketsData: Sucursalsede): Observable<ApiResponse> {
    const body = {
      id: ticketsData.Id,
      Nombre: ticketsData.Nombre,
      Ubicacion: ticketsData.ubicacion,

      usuario: 1,
    };

    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Update_SucursalSede`,
      body
    );
  }
}
