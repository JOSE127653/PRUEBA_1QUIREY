import { Component } from '@angular/core';
import { PuestosService } from 'src/app/puestos.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-puestos',
  templateUrl: './insertar-puestos.component.html',
  styleUrls: ['./insertar-puestos.component.css'],
})
export class InsertarPuestosComponent {
  nombreDepartamento: string = '';
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarPuestosComponent>,
    private departamentoService: PuestosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    if (!this.nombreDepartamento || !this.usuarioDepartamento) {
      // Show SweetAlert2 message for mandatory fields
      Swal.fire({
        icon: 'error',
        title: 'Se han insertado correctamente los datos!',
        // text: 'Todos los campos son obligatorios',
      });
      return; // Exit the method if fields are not valid
    }

    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      Usuario: this.usuarioDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        //location.reload();
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
