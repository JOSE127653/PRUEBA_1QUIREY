import { Component } from '@angular/core';
import { PerfilesService } from 'src/app/perfiles.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-perfiles',
  templateUrl: './insertar-perfiles.component.html',
  styleUrls: ['./insertar-perfiles.component.css'],
})
export class InsertarPerfilesComponent {
  nombreDepartamento: string = '';
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPerfilesComponent>,
    private departamentoService: PerfilesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if required fields are not empty
    if (!this.nombreDepartamento || !this.usuarioDepartamento) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, completa todos los campos obligatorios.',
        // text: 'Por favor, completa todos los campos obligatorios.',
      });
      return;
    }

    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      Usuario: this.usuarioDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
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
