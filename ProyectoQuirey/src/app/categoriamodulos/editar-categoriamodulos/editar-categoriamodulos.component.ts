import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editarcategoriamodulos } from 'src/app/Models/categoriamodulos.models';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-categoriamodulos',
  templateUrl: './editar-categoriamodulos.component.html',
  styleUrls: ['./editar-categoriamodulos.component.css'],
})
export class EditarCategoriamodulosComponent implements OnInit {
  tickets: Editarcategoriamodulos;

  constructor(
    public dialogRef: MatDialogRef<EditarCategoriamodulosComponent>,
    private ticketsService: CategoriamodulosService,
    @Inject(MAT_DIALOG_DATA) public data: Editarcategoriamodulos
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Verifica si los campos obligatorios están completos
    if (!this.tickets.categoria || !this.tickets.Usuario) {
      // Muestra un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la actualización
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);
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
