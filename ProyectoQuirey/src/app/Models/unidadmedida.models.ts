export interface UnidadMedida {
  Id: number;
  Nombre: string;
  Activo: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: UnidadMedida[];
  };
}

export interface EditarDepartamento {
  Id: number;
  Nombre: string;
  Activo: number;
}
