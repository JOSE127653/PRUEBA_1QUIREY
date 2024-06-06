import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetallemovimiento } from 'src/app/Models/detallemovimiento.models';
import { DetallemovimientoService } from 'src/app/detallemovimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-detallemovimiento',
  templateUrl: './editar-detallemovimiento.component.html',
  styleUrls: ['./editar-detallemovimiento.component.css'],
})
export class EditarDetallemovimientoComponent implements OnInit {
  departamento: EditarDetallemovimiento;

  constructor(
    public dialogRef: MatDialogRef<EditarDetallemovimientoComponent>,
    private departamentoService: DetallemovimientoService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetallemovimiento
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validar campos obligatorios
    if (
      !this.departamento.IdMovimiento ||
      !this.departamento.Codigo ||
      !this.departamento.Cantidad ||
      !this.departamento.Costo ||
      !this.departamento.UsuarioActualiza
    ) {
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
