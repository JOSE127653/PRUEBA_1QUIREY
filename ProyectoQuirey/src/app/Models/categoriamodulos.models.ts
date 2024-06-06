export interface categoriamodulos {
  Id: number;
  categoria: string;
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
    data: categoriamodulos[];
  };
}

export interface Editarcategoriamodulos {
  Id: number;
  categoria: string;
  FechaHora: string;
  Activo: number;
  Usuario: string;
}
