import { Component } from '@angular/core';
import { ArticulosService } from 'src/app/articulos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UnidadmedidaService } from 'src/app/unidadmedida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-articulos',
  templateUrl: './insertar-articulos.component.html',
  styleUrls: ['./insertar-articulos.component.css'],
})
export class InsertarArticulosComponent {
  mySelect: (string | number)[] = [];
  selectedValue: any;
  users: any;

  codigoDepartamento: string = '';
  descripcionDepartamento: string = '';
  idunidadDepartamento: number = 0;
  unidadmedidaDepartamento: number = 0;
  costoDepartamento: number = 0;
  precioDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarArticulosComponent>,
    private departamentoService: ArticulosService,
    private _service: UnidadmedidaService
  ) {}
  get() {
    this._service.getDepartamentos().subscribe((res) => {
      this.users = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChange() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValue = this._service.getDropDownText(
        selectedItemId,
        this.users
      );
    }
  }
  ngOnInit(): void {
    this.get();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Verifica si los campos obligatorios están completos
    if (
      !this.codigoDepartamento ||
      !this.descripcionDepartamento ||
      !this.idunidadDepartamento ||
      !this.idunidadDepartamento ||
      !this.costoDepartamento ||
      !this.precioDepartamento ||
      !this.usuarioactualizaDepartamento
    ) {
      // Muestra un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, procede con la inserción
    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      Descripcion: this.descripcionDepartamento,
      IdUnidadMedida: this.idunidadDepartamento,
      UnidadMedida: this.idunidadDepartamento,
      Costo: this.costoDepartamento,
      Precio: this.precioDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
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
        console.error('Hubo un error al insertar el departamento', error);
      },
    });
  }
}
