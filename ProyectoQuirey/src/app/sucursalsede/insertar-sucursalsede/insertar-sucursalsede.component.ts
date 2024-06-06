import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SucursalsedeService } from 'src/app/sucursalsede.service';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-insertar-sucursalsede',
  templateUrl: './insertar-sucursalsede.component.html',
  styleUrls: ['./insertar-sucursalsede.component.css'],
})
export class InsertarSucursalsedeComponent {
  Nombre: string = '';
  Ubicacion: string = '';
  Usuario: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarSucursalsedeComponent>,
    private ticketsService: SucursalsedeService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if required fields are empty
    if (!this.Nombre || !this.Ubicacion || !this.Usuario) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return; // Stop execution if validation fails
    }

    const nuevoTickets = {
      Nombre: this.Nombre,
      Ubicacion: this.Ubicacion,
      Usuario: this.Usuario,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
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
