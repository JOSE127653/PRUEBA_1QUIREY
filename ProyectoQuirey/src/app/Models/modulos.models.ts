export interface Modulos {
  Id: number;
  Modulo: string;
  FechaHora: string;
  Activo: string;
  Usuario: number;
  IdCategoria: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Modulos[];
  };
}

export interface EditarDepartamento {
  Id: number;
  Modulo: string;
  FechaHora: string;
  Activo: string;
  Usuario: number;
  IdCategoria: number;
}
