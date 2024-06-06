import { Injectable } from '@angular/core';
import {
  ApiResponse,
  categoriamodulos,
} from './Models/categoriamodulos.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class CategoriamodulosService {
  private apiUrl = 'http://localhost:5020/api/CategoriaModulos';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Get_CategoriaModulos`,
      requestBody
    );
  }
  getDropDownText(IdCategoria: string | number, object: any[]) {
    const selObj = _.filter(object, function (o) {
      return o.Id === IdCategoria;
    });
    return selObj;
  }

  // Método para insertar un nuevo departamento
  insertarTickets(ticketsData: {
    Categoria: string;
    Usuario: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      categoria: ticketsData.Categoria,
      usuario: ticketsData.Usuario, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarTickets(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Delete_CategoriaModulo`, { Id });
  }

  actualizarTickets(ticketsData: categoriamodulos): Observable<ApiResponse> {
    const body = {
      id: ticketsData.Id,
      categoria: ticketsData.categoria,

      usuario: ticketsData.Usuario,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/Update_CategoriaModulos`,
      body
    );
  }
}
