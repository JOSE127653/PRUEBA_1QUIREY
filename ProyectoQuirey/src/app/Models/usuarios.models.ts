export interface Usuario {
  Id: number;
  NombreUsuario: string;
  Password: string;
  FechaHora: string;
  Activo: number;
  IdPersona: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Usuario[];
  };
}

export interface EditarDepartamento {
  Id: number;
  NombreUsuario: string;
  Password: string;
  FechaHora: string;
  Activo: number;
  IdPersona: number;
}
