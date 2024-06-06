import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarModulousuarios } from 'src/app/Models/modulosusuarios.models';
import { ModulosusuarioService } from 'src/app/modulosusuario.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { ModulosService } from 'src/app/modulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-modulosusuario',
  templateUrl: './editar-modulosusuario.component.html',
  styleUrls: ['./editar-modulosusuario.component.css'],
})
export class EditarModulosusuarioComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValuePefiles: any;
  selectedValueModulos: any;
  perfiles: any;
  modulos: any;

  departamento: EditarModulousuarios;
  idperfileslistDepartamento: number = 0;
  idmoduloslistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarModulosusuarioComponent>,
    private departamentoService: ModulosusuarioService,
    private perfilesservice: PerfilesService,
    private modulosservice: ModulosService,
    @Inject(MAT_DIALOG_DATA) public data: EditarModulousuarios
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }
  getPerfiles() {
    this.perfilesservice.getDepartamentos().subscribe((res) => {
      this.perfiles = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  getModulos() {
    this.modulosservice.getDepartamentos().subscribe((res) => {
      this.modulos = res.response.data; // Cambia aquí
      console.log(res);
    });
  }

  selectChangePerfiles() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Perfil seleccionado:', this.idperfileslistDepartamento);
    }
  }

  selectChangeModulos() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Modulo seleccionado:', this.idmoduloslistDepartamento);
    }
  }

  ngOnInit(): void {
    this.getPerfiles();
    this.getModulos();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamento.idPerfil = this.idperfileslistDepartamento;
    this.departamento.IdModulo = this.idmoduloslistDepartamento;

    // Verificar si algún campo obligatorio está vacío
    if (
      !this.departamento.idPerfil ||
      !this.departamento.IdModulo ||
      !this.departamento.Usuario
    ) {
      // Mostrar un mensaje de error utilizando SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    this.departamentoService.actualizarusuarios(this.departamento).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.departamento);
        // location.reload();

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
