import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Articulos } from './Models/articulos.models';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  private apiUrl = 'http://localhost:5020/api/Articulos'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { estatus: 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetArticulos`,
      requestBody
    );
  }

  // Método para insertar un nuevo departamento
  insertarDepartamento(departamentoData: {
    Codigo: string;
    Descripcion: string;
    // IdUnidadMedida: number;
    UnidadMedida: number;
    Costo: number;
    Precio: number;
    UsuarioActualiza: number;
  }): Observable<ApiResponse> {
    // El 'nombre' es la única parte variable que viene del formulario
    // 'activo' y 'usuario' son valores fijos en este ejemplo
    const body = {
      codigo: departamentoData.Codigo,
      descripcion: departamentoData.Descripcion,
      unidadmedida: departamentoData.UnidadMedida,
      costo: departamentoData.Costo,
      precio: departamentoData.Precio, // Valor por defecto si no se proporciona
      usuarioactualiza: departamentoData.UsuarioActualiza || 0, // Valor por defecto si no se proporciona
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteArticulo`, { Id });
  }

  actualizarDepartamento(departamentoData: Articulos): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      codigo: departamentoData.Codigo,
      descripcion: departamentoData.Descripcion,
      unidadmedida: departamentoData.UnidadMedida,
      costo: departamentoData.Costo,
      precio: departamentoData.Precio,

      usuarioactualiza: 1,
    };
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/Update_Articulos`, body);
  }
}
