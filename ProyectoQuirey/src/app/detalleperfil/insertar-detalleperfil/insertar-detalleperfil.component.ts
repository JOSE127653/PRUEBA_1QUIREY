import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DetalleperfilService } from 'src/app/detalleperfil.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { ModulosService } from 'src/app/modulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-detalleperfil',
  templateUrl: './insertar-detalleperfil.component.html',
  styleUrls: ['./insertar-detalleperfil.component.css'],
})
export class InsertarDetalleperfilComponent {
  mySelect: (string | number)[] = [];
  selectedValuePerfiles: any;
  selectedValueModulos: any;
  perfiles: any;
  modulos: any;

  idperfilDepartamento: number = 0;
  idperfileslistDepartamento: number = 0;
  idmoduloDepartamento: number = 0;
  idmoduloslistDepartamento: number = 0;
  usuarioDepartamento: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarDetalleperfilComponent>,
    private detalleperfilService: DetalleperfilService,
    private perfilesservice: PerfilesService,
    private modulosservice: ModulosService
  ) {}
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
      this.selectedValuePerfiles = this.perfilesservice.getDropDownText(
        selectedItemId,
        this.perfiles
      );
    }
  }

  selectChangeModulos() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValueModulos = this.modulosservice.getDropDownText(
        selectedItemId,
        this.modulos
      );
    }
  }
  ngOnInit(): void {
    this.getPerfiles();
    this.getModulos();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Validar campos obligatorios
    if (
      !this.idperfileslistDepartamento ||
      !this.idmoduloslistDepartamento ||
      !this.usuarioDepartamento
    ) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
        // text: 'Por favor completa todos los campos obligatorios',
        icon: 'error',
      });
      return;
    }

    const nuevoCliente = {
      IdPerfil: this.idperfileslistDepartamento,
      IdPerfiles: this.idperfileslistDepartamento,
      IdModulo: this.idmoduloslistDepartamento,
      IdModulos: this.idmoduloslistDepartamento,
      Usuario: this.usuarioDepartamento,
      // ...otros campos si los hay
    };

    this.detalleperfilService.insertarDetalleperfil(nuevoCliente).subscribe({
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
        console.error('Hubo un error al insertar el cliente', error);
      },
    });
  }
}
