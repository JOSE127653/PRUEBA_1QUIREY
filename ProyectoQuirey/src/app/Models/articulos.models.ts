export interface Articulos {
  Id: number;
  Codigo: string;
  Descripcion: string;
  UnidadMedida: number;
  Costo: number;
  Precio: number;
  UsuarioActualiza: number;
  FechaActualiza: string;
  Estatus: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Articulos[];
  };
}

export interface EditarArticulo {
  Id: number;
  Codigo: string;
  Descripcion: string;
  UnidadMedida: number;
  Costo: number;
  Precio: number;
  UsuarioActualiza: number;
  FechaActualiza: string;
  Estatus: number;
}
