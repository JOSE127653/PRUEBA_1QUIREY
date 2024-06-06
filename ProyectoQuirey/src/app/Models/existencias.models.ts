export interface Existencias {
    Id: number;
    Codigo: string;
    IdAlmacen: number;
    Fecha: string;
    Cantidad: number;
    Estatus: number;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: Existencias [];
    };
  }

  export interface EditarExistencias{
    Id: number;
    Codigo: string;
    IdAlmacen: number;
    Fecha: string;
    Cantidad: number;
    Estatus: number;
  }