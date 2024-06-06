import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesService } from 'src/app/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-clientes',
  templateUrl: './insertar-clientes.component.html',
  styleUrls: ['./insertar-clientes.component.css'],
})
export class InsertarClientesComponent {
  Nombre: string = '';
  Direccion: string = '';
  UsuarioActualiza: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarClientesComponent>,
    private clientesService: ClientesService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Verifica si los campos obligatorios están completos
    if (!this.Nombre || !this.Direccion) {
      // Muestra un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la inserción
    const nuevoCliente = {
      Nombre: this.Nombre,
      Direccion: this.Direccion,
      UsuarioActualiza: this.UsuarioActualiza,
      // ...otros campos si los hay
    };

    this.clientesService.insertarClientes(nuevoCliente).subscribe({
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
        console.error('Hubo un error al insertar el cliente', error);
      },
    });
  }
}
