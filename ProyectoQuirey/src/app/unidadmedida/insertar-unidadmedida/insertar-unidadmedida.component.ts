import { Component } from '@angular/core';
import { AlmacenesComponent } from 'src/app/almacenes/almacenes.component';
import { MatDialogRef } from '@angular/material/dialog';
import { UnidadmedidaService } from 'src/app/unidadmedida.service';

@Component({
  selector: 'app-insertar-unidadmedida',
  templateUrl: './insertar-unidadmedida.component.html',
  styleUrls: ['./insertar-unidadmedida.component.css'],
})
export class InsertarUnidadmedidaComponent {
  nombreDepartamento: string = '';
  direccionDepartamento: string = '';
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarUnidadmedidaComponent>,
    private departamentoService: UnidadmedidaService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    const nuevoDepartamento = {
      Nombre: this.nombreDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
