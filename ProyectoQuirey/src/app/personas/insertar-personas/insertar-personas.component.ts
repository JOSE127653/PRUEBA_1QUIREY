import { Component } from '@angular/core';
import { PersonasService } from 'src/app/personas.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-personas',
  templateUrl: './insertar-personas.component.html',
  styleUrls: ['./insertar-personas.component.css'],
})
export class InsertarPersonasComponent {
  nombreDepartamento: string = '';
  appaternoDepartamento: string = '';
  apmaternoDepartamento: string = '';
  direccionDepartamento: string = '';
  Rol: number = 1;
  sucursal: number = 1;
  UsuarioActualiza: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPersonasComponent>,
    private departamentoService: PersonasService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if mandatory fields are filled
    if (
      !this.nombreDepartamento ||
      !this.appaternoDepartamento ||
      !this.apmaternoDepartamento ||
      !this.Rol ||
      !this.direccionDepartamento ||
      !this.sucursal ||
      !this.UsuarioActualiza
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
      });
      return;
    }

    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      ApPaterno: this.appaternoDepartamento,
      ApMaterno: this.apmaternoDepartamento,
      Direccion: this.direccionDepartamento,
      Rol: this.Rol,
      sucursal: this.sucursal,
      UsuarioActualiza: this.UsuarioActualiza,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        Swal.fire({
          title: 'Se han insertado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
