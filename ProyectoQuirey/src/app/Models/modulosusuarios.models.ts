export interface Modulousuarios {
  Id: number;
  idPerfil: number;
  Usuario: number;
  IdModulo: number;
  Activo: number;
  FechaHora: string;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Modulousuarios[];
  };
}

export interface EditarModulousuarios {
  Id: number;
  idPerfil: number;
  Usuario: number;
  IdModulo: number;
  Activo: number;
  FechaHora: string;
}
