import { Component } from '@angular/core';
import { MovimientosinventarioService } from 'src/app/movimientosinventario.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenesService } from 'src/app/almacenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-movimientosinventario',
  templateUrl: './insertar-movimientosinventario.component.html',
  styleUrls: ['./insertar-movimientosinventario.component.css'],
})
export class InsertarMovimientosinventarioComponent {
  mySelect: (string | number)[] = [];
  selectedValue: any;
  // selectedValue1: any;
  users: any;
  //users1: any;

  idtipomovDepartamento: number = 0;
  idalmacenDepartamento: number = 0;
  idalmaceneslistDepartamento: number = 0;
  usuarioactualizaDepartamento: number = 1;
  idDestinoDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InsertarMovimientosinventarioComponent>,
    private departamentoService: MovimientosinventarioService,
    private almacenesservice: AlmacenesService
  ) {}
  get() {
    this.almacenesservice.getDepartamentos().subscribe((res) => {
      this.users = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChange() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValue = this.almacenesservice.getDropDownText(
        selectedItemId,
        this.users
      );
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.get();
    // this.get1();
  }

  insertar(): void {
    // Check if mandatory fields are filled
    if (!this.idtipomovDepartamento || !this.idalmaceneslistDepartamento) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    const nuevoDepartamento = {
      IdTipoMov: this.idtipomovDepartamento,
      IdAlmacen: this.idalmaceneslistDepartamento,
      IdAlmacenes: this.idalmaceneslistDepartamento,
      UsuarioActualiza: this.usuarioactualizaDepartamento,
      IdDestino: this.idDestinoDepartamento,
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
