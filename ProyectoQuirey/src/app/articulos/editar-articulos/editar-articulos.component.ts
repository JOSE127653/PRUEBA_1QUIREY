import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarArticulo } from 'src/app/Models/articulos.models';
import { ArticulosService } from 'src/app/articulos.service';
import { UnidadmedidaService } from 'src/app/unidadmedida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-articulos',
  templateUrl: './editar-articulos.component.html',
  styleUrls: ['./editar-articulos.component.css'],
})
export class EditarArticulosComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValueUnidadMedida: any;
  unidadmedida: any;

  departamento: EditarArticulo;
  idunidadmedidalistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarArticulosComponent>,
    private departamentoService: ArticulosService,
    private unidadmedidaservice: UnidadmedidaService,
    @Inject(MAT_DIALOG_DATA) public data: EditarArticulo
  ) {
    this.departamento = { ...data };
  }

  ngOnInit(): void {
    this.getUnidadMedida();
  }

  getUnidadMedida() {
    this.unidadmedidaservice.getDepartamentos().subscribe((res) => {
      this.unidadmedida = res.response.data;
      console.log(res);
    });
  }

  selectChangeUnidadMedida() {
    if (this.mySelect.length > 0) {
      const selectedItemId = this.mySelect[0];
      console.log('Unidad seleccionada:', this.idunidadmedidalistDepartamento);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamento.UnidadMedida = this.idunidadmedidalistDepartamento;

    if (
      !this.departamento.Codigo ||
      !this.departamento.Descripcion ||
      !this.departamento.UnidadMedida ||
      !this.departamento.Costo ||
      !this.departamento.Precio ||
      !this.departamento.UsuarioActualiza
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(this.departamento);

          // Se recomienda evitar el uso de location.reload() para recargar la página,
          // ya que hay métodos más eficientes y menos disruptivos para actualizar los datos en una aplicación Angular.
          // Considera actualizar los datos directamente en la interfaz de usuario sin recargar toda la página.
          Swal.fire({
            title: 'Se han modificado correctamente los datos!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload(); // Considera alternativas para actualizar los datos en la UI.
            }
          });
        },
        error: (error) => {
          // Manejar errores aquí
          Swal.fire({
            icon: 'error',
            title: 'Error al guardar los cambios',
            text: 'No se pudo actualizar la información. Por favor, intente de nuevo.',
          });
        },
      });
  }
}
