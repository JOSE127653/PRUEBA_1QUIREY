import { Component } from '@angular/core';
import { DetalleticketsService } from 'src/app/detalletickets.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-detalletickets',
  templateUrl: './insertar-detalletickets.component.html',
  styleUrls: ['./insertar-detalletickets.component.css'],
})
export class InsertarDetalleticketsComponent {
  codigoDepartamento: string = '';
  idticketDepartamento: number = 0;
  cantidadDepartamento: number = 0;
  precioventaDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarDetalleticketsComponent>,
    private departamentoService: DetalleticketsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Validar campos obligatorios
    if (
      !this.codigoDepartamento ||
      !this.idticketDepartamento ||
      !this.cantidadDepartamento ||
      !this.precioventaDepartamento ||
      !this.usuarioactualizaDepartamento
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
      IdTicket: this.idticketDepartamento,
      Cantidad: this.cantidadDepartamento,
      PrecioVenta: this.precioventaDepartamento,
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
