import { Component } from '@angular/core';
import { ExistenciasService } from 'src/app/existencias.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenesService } from 'src/app/almacenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-existencias',
  templateUrl: './insertar-existencias.component.html',
  styleUrls: ['./insertar-existencias.component.css'],
})
export class InsertarExistenciasComponent {
  mySelect: (string | number)[] = [];
  selectedValue: any;
  users: any;

  codigoDepartamento: string = '';
  idalmacenDepartamento: number = 0; // Initialize with a default number value
  cantidadDepartamento: number = 0; // Initialize with a default number value
  //variable para comboUM: Any;
  constructor(
    public dialogRef: MatDialogRef<InsertarExistenciasComponent>,
    private departamentoService: ExistenciasService,
    private _service: AlmacenesService
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
    // Verificar si algún campo obligatorio está vacío
    if (
      !this.codigoDepartamento ||
      !this.idalmacenDepartamento ||
      !this.cantidadDepartamento
    ) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Todos los campos son obligatorios. Por favor, complete todos los campos.',
        icon: 'error',
      });
      return; // Detener la ejecución del método si algún campo está vacío
    }

    const nuevoDepartamento = {
      Codigo: this.codigoDepartamento,
      IdAlmacen: this.idalmacenDepartamento,
      Cantidad: this.cantidadDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);

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
