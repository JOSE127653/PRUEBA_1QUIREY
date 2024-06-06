import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarRutas } from 'src/app/Models/rutas.models';
import { RutasService } from 'src/app/rutas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-rutas',
  templateUrl: './editar-rutas.component.html',
  styleUrls: ['./editar-rutas.component.css'],
})
export class EditarRutasComponent implements OnInit {
  rutas: EditarRutas;
  constructor(
    public dialogRef: MatDialogRef<EditarRutasComponent>,
    private rutasService: RutasService,
    @Inject(MAT_DIALOG_DATA) public data: EditarRutas
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.rutas = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validación de campos obligatorios
    if (!this.rutas.Nombre || !this.rutas.UsuarioActualiza) {
      Swal.fire({
        title: 'Por favor complete todos los campos obligatorios',

        icon: 'error',
      });
      return; // Detiene la ejecución de la función si hay campos vacíos
    }

    // Si todos los campos están completos, se procede con la actualización
    this.rutasService.actualizarRutas(this.rutas).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.rutas);
        location.reload();

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
