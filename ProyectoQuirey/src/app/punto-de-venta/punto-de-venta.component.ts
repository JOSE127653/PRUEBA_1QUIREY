import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

import { tickets } from '../Models/tickets.models';
import { TicketsService } from '../tickets.service';
import { InsertarTicketsComponent } from 'src/app/tickets/insertar-tickets/insertar-tickets.component';
import { EditarTicketsComponent } from 'src/app/tickets/editar-tickets/editar-tickets.component';

import { Detalletickets } from '../Models/detalletickets.models';
import { DetalleticketsService } from '../detalletickets.service';
import { InsertarDetalleticketsComponent } from 'src/app/detalletickets/insertar-detalletickets/insertar-detalletickets.component';
import { EditarDetalleticketsComponent } from 'src/app/detalletickets/editar-detalletickets/editar-detalletickets.component';

import { ExporterService } from '../exportaciones/exporter.service';

@Component({
  selector: 'app-punto-de-venta',
  templateUrl: './punto-de-venta.component.html',
  styleUrls: ['./punto-de-venta.component.css'],
})
export class PuntoDeVentaComponent implements OnInit, AfterViewInit {
  // Tickets
  elementos: any[] = [];
  displayedColumns: string[] = [
    'Id',
    'IdSucursal',
    'IdCliente',
    'IdVendedor',
    'FechaVenta',
    'UsuarioActualiza',
    'Estatus',
    'Acciones',
  ];
  displayedColumnsdetalle: string[] = [
    'Id',
    'Codigo',
    'IdTicket',
    'Cantidad',
    'PrecioVenta',
    'Estatus',
    'FechaActualiza',
    'UsuarioActualiza',
    'DescripcionArticulo',
    'Acciones',
  ];

  dataSourceTickets = new MatTableDataSource<tickets>();
  @ViewChild(MatPaginator) paginatorTickets!: MatPaginator;

  // Detalle Tickets
  dataSourceDetalles = new MatTableDataSource<Detalletickets>();
  @ViewChild(MatPaginator) paginatorDetalles!: MatPaginator;

  constructor(
    private ticketsService: TicketsService,
    private detalleticketsService: DetalleticketsService,
    public dialog: MatDialog,
    private excelService: ExporterService
  ) {}

  ngOnInit() {
    // Configuración del filtro para Tickets
    this.dataSourceTickets.filterPredicate = (
      data: tickets,
      filter: string
    ) => {
      return (
        data.IdCliente.toString().includes(filter) ||
        data.Id.toString().includes(filter)
      );
    };

    // Configuración del filtro para Detalle Tickets
    this.dataSourceDetalles.filterPredicate = (
      data: Detalletickets,
      filter: string
    ) => {
      return (
        data.Codigo.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      );
    };

    // Obtener datos de Tickets
    this.ticketsService.getTickets().subscribe({
      next: (response) => {
        console.log(
          'Respuesta del servidor (Tickets):',
          response.response.data
        );
        if (response.success) {
          this.dataSourceTickets.data = response.response.data;
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      },
    });

    // Obtener datos de Detalle Tickets
    this.detalleticketsService.getDepartamentos().subscribe({
      next: (response) => {
        console.log(
          'Respuesta del servidor (Detalle Tickets):',
          response.response.data
        );
        if (response.success) {
          this.dataSourceDetalles.data = response.response.data;
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      },
    });
  }

  ngAfterViewInit() {
    // Asignar paginador a Tickets
    this.dataSourceTickets.paginator = this.paginatorTickets;

    // Asignar paginador a Detalle Tickets
    this.dataSourceDetalles.paginator = this.paginatorDetalles;
  }
  /////Exportacion de Excel
  exportAsXLSX(): void {
    this.excelService.exportToExcel(this.dataSourceDetalles.data, 'my_export');
  }

  exportAsXLSXTickets(): void {
    this.excelService.exportToExcel(this.dataSourceTickets.data, 'my_export');
  }
  exportAsXLSXFiltered(): void {
    this.excelService.exportToExcel(
      this.dataSourceDetalles.filteredData,
      'my_export'
    );
    this.excelService.exportToExcel(
      this.dataSourceTickets.filteredData,
      'my_export'
    );
  }
  ///////
  // Método para filtrar Tickets
  applyFilterTickets(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTickets.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceTickets.paginator) {
      this.dataSourceTickets.paginator.firstPage();
    }
  }

  // Método para filtrar Detalle Tickets
  applyFilterDetalles(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDetalles.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceDetalles.paginator) {
      this.dataSourceDetalles.paginator.firstPage();
    }
  }

  abrirInsertarModal(elemento: any) {
    const dialogRef = this.dialog.open(InsertarTicketsComponent, {
      width: '550px',
      data: elemento, // Pasar el elemento al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  abrirInsertarModalDetalle(elemento: any) {
    const dialogRef = this.dialog.open(InsertarDetalleticketsComponent, {
      width: '550px',
      data: elemento, // Pasar el elemento al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarTickets(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      Swal.fire({
        title: 'Se han eliminado los datos!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });

      this.ticketsService.eliminarTickets(Id).subscribe({
        next: () => {
          this.dataSourceTickets.data = this.dataSourceTickets.data.filter(
            (clientes: tickets) => clientes.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el cliente', error);
        },
      });
    }
  }

  eliminarDepartamentoDetalle(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.detalleticketsService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSourceDetalles.data = this.dataSourceDetalles.data.filter(
            (departamento: Detalletickets) => departamento.Id !== Id
          );

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
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModalDetalle(departamento: Detalletickets) {
    const dialogRef = this.dialog.open(EditarDetalleticketsComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Manejar el resultado si es necesario
      }
    });
  }
}
