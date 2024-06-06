import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetalletickets } from 'src/app/Models/detalletickets.models';
import { DetalleticketsService } from 'src/app/detalletickets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-detalletickets',
  templateUrl: './editar-detalletickets.component.html',
  styleUrls: ['./editar-detalletickets.component.css'],
})
export class EditarDetalleticketsComponent implements OnInit {
  departamento: EditarDetalletickets;
  constructor(
    public dialogRef: MatDialogRef<EditarDetalleticketsComponent>,
    private departamentoService: DetalleticketsService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetalletickets
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validación de campos obligatorios
    if (
      !this.departamento.IdTicket ||
      !this.departamento.Codigo ||
      !this.departamento.Cantidad ||
      !this.departamento.PrecioVenta ||
      !this.departamento.UsuarioActualiza
    ) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return; // Detener la ejecución si algún campo está vacío
    }

    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
          this.dialogRef.close(this.departamento);
          // location.reload();

          Swal.fire({
            title: 'Se han modificado correctamente los datos!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        },
        error: (error) => {
          // Manejar errores aquí
        },
      });
  }
}
