import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetallemovimientoService } from 'src/app/detallemovimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-detallemovimiento',
  templateUrl: './insertar-detallemovimiento.component.html',
  styleUrls: ['./insertar-detallemovimiento.component.css'],
})
export class InsertarDetallemovimientoComponent {
  codigoDepartamento: string = '';
  idMovimientoDepartamento: number = 0;
  cantidadDepartamento: number = 0;
  costoDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarDetallemovimientoComponent>,
    private departamentoService: DetallemovimientoService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Validar campos obligatorios
    if (
      !this.codigoDepartamento ||
      !this.idMovimientoDepartamento ||
      !this.cantidadDepartamento ||
      !this.costoDepartamento
    ) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
    }

    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      IdMovimiento: this.idMovimientoDepartamento,
      Cantidad: this.cantidadDepartamento,
      Costo: this.costoDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        // location.reload();
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
