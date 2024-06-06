import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarSucursalsede } from 'src/app/Models/sucursalsede.models';
import { SucursalsedeService } from 'src/app/sucursalsede.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-sucursalsede',
  templateUrl: './editar-sucursalsede.component.html',
  styleUrls: ['./editar-sucursalsede.component.css'],
})
export class EditarSucursalsedeComponent implements OnInit {
  tickets: EditarSucursalsede;
  constructor(
    public dialogRef: MatDialogRef<EditarSucursalsedeComponent>,
    private ticketsService: SucursalsedeService,
    @Inject(MAT_DIALOG_DATA) public data: EditarSucursalsede
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validación de campos obligatorios
    if (
      !this.tickets.Nombre ||
      !this.tickets.ubicacion ||
      !this.tickets.Usuario
    ) {
      Swal.fire({
        title: 'Por favor complete todos los campos obligatorios',

        icon: 'error',
      });
      return; // Detiene la ejecución de la función si hay campos vacíos
    }

    // Si todos los campos están completos, se procede con la actualización
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);
        //location.reload();
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
