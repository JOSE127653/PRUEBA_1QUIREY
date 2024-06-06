import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse,Detallemovimiento } from './Models/detallemovimiento.models';
@Injectable({
  providedIn: 'root'
})
export class DetallemovimientoService {
  private apiUrl = 'http://localhost:5020/api/DetalleMoviento'; // Ajusta la URL base del API

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<ApiResponse> {
    const requestBody = { "estatus": 1 }; // Si estatus es un número, no debería estar en comillas
    return this.http.post<ApiResponse>(`${this.apiUrl}/GetDetalleMovimiento?IdMovimiento=0`, requestBody);
  }

// Método para insertar un nuevo departamento
insertarDepartamento(departamentoData: { Codigo: string; Idmovimiento: number; Cantidad: number; costo: number; UsuarioActualiza: number }): Observable<ApiResponse> {
  // El 'nombre' es la única parte variable que viene del formulario
  // 'activo' y 'usuario' son valores fijos en este ejemplo
  const body = {
    codigo: departamentoData.Codigo,
    idmovimiento: departamentoData.Idmovimiento,
    cantidad: departamentoData.Cantidad,
    costo: departamentoData.costo,// Valor por defecto si no se proporciona
    usuarioactualiza: departamentoData.UsuarioActualiza || 0,// Valor por defecto si no se proporciona
  };
  return this.http.post<ApiResponse>(`${this.apiUrl}/InsertDetalleMovimiento`, body);
  }

  eliminarDepartamento(Id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/DeleteDetalleMovimiento`, { Id });
  }
  
  
  actualizarDepartamento(departamentoData: Detallemovimiento): Observable<ApiResponse> {
    const body ={
      id: departamentoData.Id,
      idmovimiento: departamentoData.IdMovimiento,
      codigo: departamentoData.Codigo,
      cantidad: departamentoData.Cantidad,
      costo: departamentoData.Costo,
      
      usuarioactualiza: 1
    }
    console.log('Enviando solicitud con el siguiete cuerpo:', body);
    return this.http.post<ApiResponse>(`${this.apiUrl}/UpdateDetalleMovimiento`, body);
  }
}
