import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditarDepartamento } from 'src/app/Models/usuarios.models';
import { UsuariosService } from 'src/app/usuarios.service';
import { PersonasService } from 'src/app/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css'],
})
export class EditarUsuariosComponent implements OnInit {
  mySelect: (string | number)[] = [];
  selectedValuePersonas: any;
  personas: any;
  departamento: EditarDepartamento;
  idpersonaslistDepartamento = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarUsuariosComponent>,
    private departamentoService: UsuariosService,
    private personasservice: PersonasService,
    @Inject(MAT_DIALOG_DATA) public data: EditarDepartamento
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.departamento = { ...data };
  }
  getPersonas() {
    this.personasservice.getDepartamentos().subscribe((res) => {
      this.personas = res.response.data;
      console.log(res);
    });
  }
  selectChangePersonas() {
    if (this.mySelect.length > 0) {
      const selectedItemId = this.mySelect[0];
      console.log('Sucursal seleccionada:', this.idpersonaslistDepartamento);
    }
  }
  ngOnInit(): void {
    this.getPersonas();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.departamento.IdPersona = this.idpersonaslistDepartamento;
    // Validación de campos obligatorios
    if (
      !this.departamento.NombreUsuario ||
      !this.departamento.Password ||
      !this.departamento.IdPersona
    ) {
      Swal.fire({
        title: 'Por favor complete todos los campos obligatorios',
        // text: 'Por favor complete todos los campos obligatorios',
        icon: 'error',
      });
      return; // Detiene la ejecución de la función si hay campos vacíos
    }

    // Si todos los campos están completos, se procede con la actualización
    this.departamentoService
      .actualizarDepartamento(this.departamento)
      .subscribe({
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
