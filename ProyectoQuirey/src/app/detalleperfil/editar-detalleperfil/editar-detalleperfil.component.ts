import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDetallePerfil } from 'src/app/Models/detalleperfil.models';
import { DetalleperfilService } from 'src/app/detalleperfil.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { ModulosService } from 'src/app/modulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-detalleperfil',
  templateUrl: './editar-detalleperfil.component.html',
  styleUrls: ['./editar-detalleperfil.component.css'],
})
export class EditarDetalleperfilComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValuePerfiles: any;
  selectedValueModulos: any;
  perfiles: any;
  modulos: any;

  detalleperfil: EditarDetallePerfil;
  idperfileslistDepartamento: number = 0;
  idmoduloslistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarDetalleperfilComponent>,
    private detalleperfilService: DetalleperfilService,
    private perfilesservice: PerfilesService,
    private modulosservice: ModulosService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDetallePerfil
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.detalleperfil = { ...data };
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
      console.log('Sucursal seleccionada:', this.idperfileslistDepartamento);
    }
  }

  selectChangeModulos() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('Cliente seleccionado:', this.idmoduloslistDepartamento);
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
    this.detalleperfil.IdPerfil = this.idperfileslistDepartamento;
    this.detalleperfil.IdModulo = this.idmoduloslistDepartamento;
    // Validar campos obligatorios
    if (
      !this.detalleperfil.IdPerfil ||
      !this.detalleperfil.IdModulo ||
      !this.detalleperfil.Usuario
    ) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
    }

    this.detalleperfilService
      .actualizarDetalleperfil(this.detalleperfil)
      .subscribe({
        next: (response) => {
          // Cerrar la modal después de guardar los cambios
          this.dialogRef.close(this.detalleperfil);
          location.reload();
          this.dialogRef.close();
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
