import { Component } from '@angular/core';
import { AlmacenesService } from 'src/app/almacenes.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-almacenes',
  templateUrl: './insertar-almacenes.component.html',
  styleUrls: ['./insertar-almacenes.component.css'],
})
export class InsertarAlmacenesComponent {
  nombreDepartamento: string = '';
  direccionDepartamento: string = '';
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarAlmacenesComponent>,
    private departamentoService: AlmacenesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Verifica si los campos obligatorios están completos
    if (
      !this.nombreDepartamento ||
      !this.direccionDepartamento ||
      !this.usuarioactualizaDepartamento
    ) {
      // Muestra un mensaje de error utilizando Swal
      Swal.fire({
        icon: 'error',

        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
      });

      // También puedes imprimir el mensaje en la consola si lo deseas
      console.error('Por favor, complete todos los campos obligatorios.');
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la inserción
    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      Direccion: this.direccionDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
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
