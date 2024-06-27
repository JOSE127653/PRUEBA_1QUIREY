import { Component, ViewChild } from '@angular/core';
import { Sucursalsede } from '../Models/sucursalsede.models';
import { MatTableDataSource } from '@angular/material/table';
import { SucursalsedeService } from '../sucursalsede.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertarSucursalsedeComponent } from 'src/app/sucursalsede/insertar-sucursalsede/insertar-sucursalsede.component';
import { EditarSucursalsedeComponent } from 'src/app/sucursalsede/editar-sucursalsede/editar-sucursalsede.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

import { ExporterService } from '../exportaciones/exporter.service';
@Component({
  selector: 'app-sucursalsede',
  templateUrl: './sucursalsede.component.html',
  styleUrls: ['./sucursalsede.component.css'],
})
export class SucursalsedeComponent {
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Ubicacion',
    'FechaHora',
    'Activo',
    'Usuario',
    'Acciones',
  ];

  dataSource = new MatTableDataSource<Sucursalsede>();

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
    private ticketsService: SucursalsedeService,
    public dialog: MatDialog,
    private excelService: ExporterService
  ) {
    this.dataSource = new MatTableDataSource<Sucursalsede>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Sucursalsede, filter: string) => {
      return (
        data.Nombre.toString().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.ticketsService.getTickets().subscribe({
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
    const dialogRef = this.dialog.open(InsertarSucursalsedeComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarTickets(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.ticketsService.eliminarTickets(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (clientes: Sucursalsede) => clientes.Id !== Id
          );

          // Agregar la notificación de éxito aquí
          Swal.fire({
            title: 'Se ha eliminado correctamente!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el cliente', error);
        },
      });
    }
  }

  abrirEditarModal(clientes: Sucursalsede) {
    const dialogRef = this.dialog.open(EditarSucursalsedeComponent, {
      width: '550px',
      data: clientes, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
