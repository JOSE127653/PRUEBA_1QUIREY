export interface Perfiles {
  Id: number;
  Nombre: string;
  FechaHora: string;
  Activo: string;
  Usuario: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Perfiles[];
  };
}

export interface EditarDepartamento {
  Id: number;
  Nombre: string;
  FechaHora: string;
  Activo: string;
  Usuario: number;
}
