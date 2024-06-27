import { Component, ViewChild } from '@angular/core';
import { ModulosusuarioService } from '../modulosusuario.service';
import { Modulousuarios } from '../Models/modulosusuarios.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarModulosusuarioComponent } from './insertar-modulosusuario/insertar-modulosusuario.component';
import { EditarModulosusuarioComponent } from './editar-modulosusuario/editar-modulosusuario.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

import { ExporterService } from '../exportaciones/exporter.service';
@Component({
  selector: 'app-modulosusuario',
  templateUrl: './modulosusuario.component.html',
  styleUrls: ['./modulosusuario.component.css'],
})
export class ModulosusuarioComponent {
  displayedColumns: string[] = [
    'Id',
    'IdPerfil',
    'FechaHora',
    'Activo',
    'Usuario',
    'IdModulo',
    'Acciones',
  ];

  dataSource = new MatTableDataSource<Modulousuarios>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /// Exportacion a excel
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.dataSource.data, 'my_export');
  }

  exportAsXLSXFiltered(): void {
    this.excelService.exportToExcel(this.dataSource.filteredData, 'my_export');
  }
  constructor(
    private personasService: ModulosusuarioService,
    public dialog: MatDialog,
    private excelService: ExporterService
  ) {
    this.dataSource = new MatTableDataSource<Modulousuarios>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (
      data: Modulousuarios,
      filter: string
    ) => {
      return data.Id.toString().includes(filter); // Puedes añadir más campos si es necesario
    };
    this.personasService.getusuarios().subscribe({
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
    const dialogRef = this.dialog.open(InsertarModulosusuarioComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarDepartamento(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      Swal.fire({
        title: 'Se han eliminado los datos!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
      //location.reload();

      this.personasService.eliminarusuarios(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Modulousuarios) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Modulousuarios) {
    const dialogRef = this.dialog.open(EditarModulosusuarioComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
