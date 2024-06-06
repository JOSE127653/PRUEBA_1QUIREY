import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarMovimientosInventario } from 'src/app/Models/movimientosinventario.models';
import { MovimientosinventarioService } from 'src/app/movimientosinventario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-movimientosinventario',
  templateUrl: './editar-movimientosinventario.component.html',
  styleUrls: ['./editar-movimientosinventario.component.css'],
})
export class EditarMovimientosinventarioComponent implements OnInit {
  departamento: EditarMovimientosInventario;
  constructor(
    public dialogRef: MatDialogRef<EditarMovimientosinventarioComponent>,
    private departamentoService: MovimientosinventarioService,
    @Inject(MAT_DIALOG_DATA) public data: EditarMovimientosInventario
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
      !this.departamento.IdTipoMov ||
      !this.departamento.IdAlmacen ||
      !this.departamento.UsuarioActualiza ||
      !this.departamento.Estatus
    ) {
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
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
