import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-categoriamodulos',
  templateUrl: './insertar-categoriamodulos.component.html',
  styleUrls: ['./insertar-categoriamodulos.component.css'],
})
export class InsertarCategoriamodulosComponent {
  Categoria: string = '';
  Usuario: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarCategoriamodulosComponent>,
    private ticketsService: CategoriamodulosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Verifica si los campos obligatorios están completos
    if (!this.Categoria || !this.Usuario) {
      // Muestra un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la inserción
    const nuevoTickets = {
      Categoria: this.Categoria,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
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
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
