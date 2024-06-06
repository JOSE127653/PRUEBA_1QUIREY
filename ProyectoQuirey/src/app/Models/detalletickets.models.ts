export interface Detalletickets {
    Id: number;
    Codigo: string;
    IdTicket: number;
    Cantidad: number;
    PrecioVenta: number;
    Estatus: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    DescripcionArticulo: string;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: Detalletickets [];
    };
  }

  export interface EditarDetalletickets{
    Id: number;
    Codigo: string;
    IdTicket: number;
    Cantidad: number;
    PrecioVenta: number;
    Estatus: number;
    FechaActualiza: string;
    UsuarioActualiza: number;
    DescripcionArticulo: string;
  }