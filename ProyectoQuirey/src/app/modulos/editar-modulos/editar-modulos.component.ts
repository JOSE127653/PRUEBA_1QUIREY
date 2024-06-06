import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/modulos.models';
import { ModulosService } from 'src/app/modulos.service';
import Swal from 'sweetalert2';
import { CategoriamodulosService } from 'src/app/categoriamodulos.service';
@Component({
  selector: 'app-editar-modulos',
  templateUrl: './editar-modulos.component.html',
  styleUrls: ['./editar-modulos.component.css'],
})
export class EditarModulosComponent implements OnInit {
  departamento: EditarDepartamento;

  mySelect: (string | number)[] = [];
  selectedValueCategoria: any;
  categoria: any;
  idcategorialistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarModulosComponent>,
    private departamentoService: ModulosService,
    private categoriaservice: CategoriamodulosService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDepartamento
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }
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
      console.log('Categoria seleccionada:', this.idcategorialistDepartamento);
    }
  }
  ngOnInit(): void {
    this.getCategoria();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    // Validación de campos obligatorios
    this.departamento.IdCategoria = this.idcategorialistDepartamento;

    // Verificar campos obligatorios vacíos

    if (
      !this.departamento.Modulo ||
      // !this.departamento.Activo ||
      !this.departamento.Usuario ||
      !this.departamento.IdCategoria
    ) {
      // Mostrar mensaje de advertencia con SweetAlert2
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        icon: 'warning',
      });
      return;
    }

    // Si todos los campos obligatorios están completos, proceder con la actualización
    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
        next: (response) => {
          // Cerrar la modal y posiblemente actualizar la tabla
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
          // Manejar errores aquí
        },
      });
  }
}
