export interface Personas {
  Id: number;
  Nombre: string;
  ApPaterno: string;
  ApMaterno: string;
  UsuarioActualiza: string;
  Direccion: string;
  Perfil: number;
  Rol: string;
  sucursal: number;
}

export interface ApiResponse {
  StatusCode: number;
  success: boolean;
  fecha: string;
  message: string;
  response: {
    data: Personas[];
  };
}

export interface EditarPersonas {
  Id: number;
  Nombre: string;
  ApPaterno: string;
  ApMaterno: string;
  UsuarioActualiza: string;
  Direccion: string;
  Perfil: number;
  Rol: string;
  sucursal: number;
}
