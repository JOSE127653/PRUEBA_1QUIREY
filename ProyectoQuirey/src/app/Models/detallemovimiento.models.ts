export interface Detallemovimiento {
    Id: number;
    IdMovimiento: number;
    Codigo: string;
    Cantidad: number;
    Costo: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
    Descripcion: string;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: Detallemovimiento [];
    };
  }

  export interface EditarDetallemovimiento{
    Id: number;
    IdMovimiento: number;
    Codigo: string;
    Cantidad: number;
    Costo: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
    Descripcion: string;

  }