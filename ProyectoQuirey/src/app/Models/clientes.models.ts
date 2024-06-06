export interface clientes {
    Id: number;
    Nombre: string;
    Direccion: string;
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
      data: clientes [];
    };
  }

  export interface EditarClientes{
    Id: number;
    Nombre: string;
    Direccion: string;
    FechaActualiza: string;
    UsuarioActualiza: number;
    Estatus: number;
  }