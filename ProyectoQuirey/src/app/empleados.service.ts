import { Injectable } from '@angular/core';
import { ApiResponse, empleados } from './Models/empleados.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private apiUrl = 'http://localhost:5020/api/Empleados';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<ApiResponse> {
    const requestBody = { Activo: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetEmpleados`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarTickets(ticketsData: {
    Matricula: number;
    Puestos: number;
    Perfil: number;
    Usuario: number;
    IdPersona: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      Matricula: ticketsData.Matricula || 0,
      Puestos: ticketsData.Puestos || 0,
      Perfil: ticketsData.Perfil || 0,
      Usuario: ticketsData.Usuario || 0,
      IdPersona: ticketsData.IdPersona || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarTickets(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteEmpleados`, { Id });
  }

  actualizarTickets(ticketsData: empleados): Observable<ApiResponse> {
    const body = {
      Id: ticketsData.Id,
      Matricula: ticketsData.Matricula || 0,
      Puesto: ticketsData.Puesto || 0,
      Perfil: ticketsData.Perfil || 0,
      Usuario: ticketsData.Usuario || 0,

      IdPersona: ticketsData.idPersona || 0,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateUsuariosUno`,
      body
    );
  }
}
