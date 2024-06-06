export interface Sucursalsede {
  Id: number;
  Nombre: string;
  ubicacion: string;
  FechaHora: string;
  Activo: number;
  Usuario: string;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Sucursalsede[];
  };
}

export interface EditarSucursalsede {
  Id: number;
  Nombre: string;
  ubicacion: string;
  FechaHora: string;
  Activo: number;
  Usuario: string;
}
