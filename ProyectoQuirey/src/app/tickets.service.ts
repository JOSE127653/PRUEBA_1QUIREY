import { Injectable } from '@angular/core';
import { ApiResponse, tickets } from './Models/tickets.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private apiUrl = 'http://localhost:5020/api/Tickets';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(`${this.apiUrl}/GetTicket`, requestBody);
  }

  // Método para insertar un nuevo departamento
  insertarTickets(ticketsData: {
    IdSucursal: number;
    IdCliente: number;
    IdVendedor: number;
    UsuarioActualiza: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      idsucursal: ticketsData.IdSucursal,
      idcliente: ticketsData.IdCliente,
      idvendedor: ticketsData.IdVendedor, // Valor por defecto si no se proporciona
      usuarioactualiza: ticketsData.UsuarioActualiza || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarTickets(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteTicket`, { Id });
  }

  actualizarTickets(ticketsData: tickets): Observable<ApiResponse> {
    const body = {
      id: ticketsData.Id,
      IdSucursal: ticketsData.IdSucursal,
      IdCliente: ticketsData.IdCliente,
      IdVendedor: ticketsData.IdVendedor,

      usuarioactualiza: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateTicket`, body);
  }
}
