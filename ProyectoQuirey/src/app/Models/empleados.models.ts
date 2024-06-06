export interface empleados {
  Id: number;
  Matricula: number;
  Puesto: number;
  Perfil: number;
  FechaHora: string;
  Activo: number;
  Usuario: number;
  idPersona: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: empleados[];
  };
}

export interface Editarempleados {
  Id: number;
  Matricula: number;
  Puesto: number;
  Perfil: number;
  FechaHora: string;
  Activo: number;
  Usuario: number;
  idPersona: number;
}
