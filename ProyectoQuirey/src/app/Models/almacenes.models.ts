export interface Almacenes {
    Id: number;
    Nombre: string;
    Direccion: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Encargado: number;
    Estatus: number;
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: Almacenes [];
    };
  }

  export interface EditarDepartamento{
    Id: number;
    Nombre: string;
    Direccion: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Encargado: number;
    Estatus: number;
  }