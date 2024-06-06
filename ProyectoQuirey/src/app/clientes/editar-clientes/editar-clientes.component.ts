import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarClientes } from 'src/app/Models/clientes.models';
import { ClientesService } from 'src/app/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css'],
})
export class EditarClientesComponent implements OnInit {
  clientes: EditarClientes;
  constructor(
    public dialogRef: MatDialogRef<EditarClientesComponent>,
    private clientesService: ClientesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarClientes
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.clientes = { ...data };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validar campos obligatorios
    if (
      !this.clientes.Nombre ||
      !this.clientes.Direccion ||
      !this.clientes.UsuarioActualiza
    ) {
      // Mostrar mensaje de error
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'error',
      });
      return; // Detener la ejecución del método
    }

    // Realizar la actualización si los campos obligatorios están completos
    this.clientesService.actualizarClientes(this.clientes).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.clientes);
        location.reload();

        // Mostrar mensaje de éxito
        Swal.fire({
          title: 'Éxito',
          text: 'Se han modificado correctamente los datos!',
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
