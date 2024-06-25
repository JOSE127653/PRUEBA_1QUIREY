import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DetalleperfilService } from 'src/app/detalleperfil.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { ModulosService } from 'src/app/modulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-detalleperfil',
  templateUrl: './insertar-detalleperfil.component.html',
  styleUrls: ['./insertar-detalleperfil.component.css'],
})
export class InsertarDetalleperfilComponent implements OnInit {
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

  perfilesControl = new FormControl();
  modulosControl = new FormControl();
  filteredPerfiles: any;
  filteredModulos: any;

  constructor(
    public dialogRef: MatDialogRef<InsertarDetalleperfilComponent>,
    private detalleperfilService: DetalleperfilService,
    private perfilesservice: PerfilesService,
    private modulosservice: ModulosService
  ) {}

  ngOnInit(): void {
    this.getPerfiles();
    this.getModulos();
    this.filteredPerfiles = this.perfilesControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPerfiles(value))
    );

    this.filteredModulos = this.modulosControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterModulos(value))
    );
  }

  private _filterPerfiles(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.perfiles.filter((option: { Nombre: string; }) => option.Nombre.toLowerCase().includes(filterValue));
  }

  private _filterModulos(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.modulos.filter((option: { Modulo: string; }) => option.Modulo.toLowerCase().includes(filterValue));
  }

  getPerfiles() {
    this.perfilesservice.getDepartamentos().subscribe((res) => {
      this.perfiles = res.response.data;
      console.log(res);
    });
  }

  getModulos() {
    this.modulosservice.getDepartamentos().subscribe((res) => {
      this.modulos = res.response.data;
      console.log(res);
    });
  }

  selectChangePerfiles() {
    if (this.mySelect.length > 0) {
      const selectedItemId = this.mySelect[0];
      this.selectedValuePerfiles = this.perfilesservice.getDropDownText(
        selectedItemId,
        this.perfiles
      );
    }
  }

  selectChangeModulos() {
    if (this.mySelect.length > 0) {
      const selectedItemId = this.mySelect[0];
      this.selectedValueModulos = this.modulosservice.getDropDownText(
        selectedItemId,
        this.modulos
      );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    if (
      !this.idperfileslistDepartamento ||
      !this.idmoduloslistDepartamento ||
      !this.usuarioDepartamento
    ) {
      Swal.fire({
        title: 'Por favor completa todos los campos obligatorios',
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
    };

    this.detalleperfilService.insertarDetalleperfil(nuevoCliente).subscribe({
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
        console.error('Hubo un error al insertar el cliente', error);
      },
    });
  }
}
