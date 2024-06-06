import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApiResponse,
  MovimientosInventario,
} from './Models/movimientosinventario.models';

@Injectable({
  providedIn: 'root',
})
export class MovimientosinventarioService {
  private apiUrl = 'http://localhost:5020/api/MovimientosInventario';

  constructor(private http: HttpClient) {}

  getDepartamentos(IdTipoMov?: number): Observable<ApiResponse> {
    const requestBody = {
      estatus: 1,
      IdTipoMov: IdTipoMov,
    };
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/GetMovimientosInventario?IdTipoMov=0`,
      requestBody
    );
  }

  insertarDepartamento(departamentoData: {
    IdTipoMov: number;
    IdAlmacen: number;
    UsuarioActualiza: number;
  }): Observable<ApiResponse> {
    const body = {
      idtipomov: departamentoData.IdTipoMov,
      idalmacen: departamentoData.IdAlmacen,
      usuarioactualiza: departamentoData.UsuarioActualiza,
    };
    return this.http.post<ApiResponse>(`${this.apiUrl}/Insert`, body);
  }

  eliminarDepartamento(Id: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/DeleteMovimientosInventario`,
      { Id }
    );
  }

  actualizarDepartamento(
    departamentoData: MovimientosInventario
  ): Observable<ApiResponse> {
    const body = {
      id: departamentoData.Id,
      idtipomov: departamentoData.IdTipoMov,
      idalmacen: departamentoData.IdAlmacen,
      usuarioactualiza: departamentoData.UsuarioActualiza,
    };
    console.log('Enviando solicitud con el siguiente cuerpo:', body);
    return this.http.post<ApiResponse>(
      `${this.apiUrl}/UpdateMovimientosInventario`,
      body
    );
  }
}
