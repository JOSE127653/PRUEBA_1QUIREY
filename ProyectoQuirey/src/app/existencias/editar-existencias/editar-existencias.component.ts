import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarExistencias } from 'src/app/Models/existencias.models';
import { ExistenciasService } from 'src/app/existencias.service';
import { AlmacenesService } from 'src/app/almacenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-existencias',
  templateUrl: './editar-existencias.component.html',
  styleUrls: ['./editar-existencias.component.css'],
})
export class EditarExistenciasComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValueAlmacenes: any;
  almacenes: any;

  departamento: EditarExistencias;
  idalmaceneslistDepartamento = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarExistenciasComponent>,
    private existenciasService: ExistenciasService,
    private almacenesService: AlmacenesService,
    @Inject(MAT_DIALOG_DATA) public data: EditarExistencias
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }

  ngOnInit(): void {
    this.getAlmacenes();
  }

  getAlmacenes() {
    this.almacenesService.getDepartamentos().subscribe((res) => {
      this.almacenes = res.response.data;
      console.log(res);
    });
  }

  selectChangealmacenes() {
    if (this.mySelect.length > 0) {
      const selectedItemId = this.mySelect[0];
      console.log('Unidad seleccionada:', this.idalmaceneslistDepartamento);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamento.IdAlmacen = this.idalmaceneslistDepartamento;

    if (
      !this.departamento.Codigo ||
      !this.departamento.IdAlmacen ||
      !this.departamento.Cantidad ||
      !this.departamento.Estatus
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Realizar la actualización de la existencia
    this.existenciasService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(this.departamento);
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
          console.error('Hubo un error al actualizar la existencia', error);
          Swal.fire('Error al actualizar', '', 'error');
        },
      });
  }
}
