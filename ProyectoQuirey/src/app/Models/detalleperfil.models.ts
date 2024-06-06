export interface DetallePerfil {
  Id: number;
  IdPerfil: number;
  IdModulo: number;
  FechaHora: string;
  Activo: string;
  Usuario: string;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: DetallePerfil[];
  };
}

export interface EditarDetallePerfil {
  Id: number;
  IdPerfil: number;
  IdModulo: number;
  FechaHora: string;
  Activo: string;
  Usuario: string;
}
