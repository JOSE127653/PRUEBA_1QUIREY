export interface Puestos {
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
    data: Puestos[];
  };
}

export interface EditarDepartamento {
  Id: number;
  Nombre: string;
  FechaHora: string;
  Activo: string;
  Usuario: number;
}
