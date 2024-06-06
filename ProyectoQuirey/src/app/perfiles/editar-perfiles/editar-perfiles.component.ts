import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/perfiles.models';
import { PerfilesService } from 'src/app/perfiles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-perfiles',
  templateUrl: './editar-perfiles.component.html',
  styleUrls: ['./editar-perfiles.component.css'],
})
export class EditarPerfilesComponent implements OnInit {
  departamento: EditarDepartamento;
  constructor(
    public dialogRef: MatDialogRef<EditarPerfilesComponent>,
    private departamentoService: PerfilesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDepartamento
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
      !this.departamento.Nombre ||
      !this.departamento.Usuario ||
      !this.departamento.Activo
    ) {
      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',

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
