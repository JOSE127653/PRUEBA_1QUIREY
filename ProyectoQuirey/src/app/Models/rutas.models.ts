export interface rutas {
    Id: number;
    Nombre: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: rutas [];
    };
  }

  export interface EditarRutas{
    Id: number;
    Nombre: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
  }