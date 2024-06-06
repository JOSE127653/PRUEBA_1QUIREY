import { Component } from '@angular/core';
import { ModulosService } from 'src/app/modulos.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';
@Component({
  selector: 'app-insertar-modulos',
  templateUrl: './insertar-modulos.component.html',
  styleUrls: ['./insertar-modulos.component.css'],
})
export class InsertarModulosComponent {
  mySelect: (string | number)[] = [];
  selectedValueCategoria: any;
  categoria: any;

  moduloDepartamento: string = '';
  usuarioDepartamento: number = 1;
  idcategoriaDepartamento: number = 1;
  idcategorialistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InsertarModulosComponent>,
    private departamentoService: ModulosService,
    private categoriaservice:CategoriamodulosService
  ) {}
  getCategoria() {
    this.categoriaservice.getTickets().subscribe((res) => {
      this.categoria = res.response.data; // Cambia aquí
      console.log(res);
    });
  }
  selectChangeCategoria() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValueCategoria = this.categoriaservice.getDropDownText(
        selectedItemId,
        this.categoria
      );
    }
  }
  ngOnInit(): void {
    this.getCategoria();
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Check if mandatory fields are filled
    if (
      !this.moduloDepartamento ||
      !this.usuarioDepartamento ||
      !this.idcategorialistDepartamento ||
      !this.idcategorialistDepartamento 
    ) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      return; // Stop the execution if fields are not filled
    }

    const nuevoDepartamento = {
      Modulo: this.moduloDepartamento,
      Usuario: this.usuarioDepartamento,
      IdCategoria: this.idcategorialistDepartamento,
      IdCategorias:this.idcategorialistDepartamento,
      // ...otros campos si los hay
    };

    this.departamentoService.insertarDepartamento(nuevoDepartamento).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        location.reload();
      },
      error: (error) => {
        console.error('Hubo un error al insertar el departamento', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al insertar el departamento. Por favor, inténtelo de nuevo.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }
}
