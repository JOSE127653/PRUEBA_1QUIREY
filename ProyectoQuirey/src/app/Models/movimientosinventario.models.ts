export interface MovimientosInventario {
    Id: number;
    IdTipoMov: number;
    IdAlmacen: number;
    FechaMovimiento: string;
    Estatus: number;
    NombreAlmacen: string;
    NombreMovimiento: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Tipo_Descripcion: string;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: MovimientosInventario [];
    };
  }

  export interface EditarMovimientosInventario{
    Id: number;
    IdTipoMov: number;
    IdAlmacen: number;
    FechaMovimiento: string;
    Estatus: number;
    NombreAlmacen: string;
    NombreMovimiento: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Tipo_Descripcion: string;

  }