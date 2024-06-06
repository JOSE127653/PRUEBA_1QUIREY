import { Component, ViewChild } from '@angular/core';
import { ExistenciasService } from '../existencias.service';
import { Existencias } from '../Models/existencias.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { InsertarExistenciasComponent } from './insertar-existencias/insertar-existencias.component';
import { EditarExistenciasComponent } from './editar-existencias/editar-existencias.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css'],
})
export class ExistenciasComponent {
  displayedColumns: string[] = [
    'Id',
    'Codigo',
    'IdAlmacen',
    'Fecha',
    'Cantidad',
    'Estatus',
  ];

  dataSource = new MatTableDataSource<Existencias>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private existenciasService: ExistenciasService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Existencias>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Existencias, filter: string) => {
      return (
        data.Codigo.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.existenciasService.getDepartamentos().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response.response.data);
        if (response.success) {
          this.dataSource.data = response.response.data; // Asigna los datos al atributo 'data' de dataSource
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      },
    });
  }
  // Método para realizar el filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirInsertarModal() {
    const dialogRef = this.dialog.open(InsertarExistenciasComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  abrirEditarModal(departamento: Existencias) {
    const dialogRef = this.dialog.open(EditarExistenciasComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
