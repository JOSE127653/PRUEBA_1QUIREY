
export interface tickets {
    Id: number;
    IdSucursal: number;
    IdCliente: number;
    IdVendedor: number;
    FechaVenta: string;
    UsuarioActualiza: number;
    Estatus: number;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: tickets [];
    };
  }

  export interface EditarTickets{
    Id: number;
    IdSucursal: number;
    IdCliente: number;
    IdVendedor: number;
    FechaVenta: string;
    UsuarioActualiza: number;
    Estatus: number;
  }