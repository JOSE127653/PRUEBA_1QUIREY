import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

import { MovimientosInventario } from '../Models/movimientosinventario.models';
import { MovimientosinventarioService } from '../movimientosinventario.service';
import { InsertarMovimientosinventarioComponent } from '../movimientosinventario/insertar-movimientosinventario/insertar-movimientosinventario.component';
import { EditarMovimientosinventarioComponent } from '../movimientosinventario/editar-movimientosinventario/editar-movimientosinventario.component';

import { DetallemovimientoService } from '../detallemovimiento.service';
import { Detallemovimiento } from '../Models/detallemovimiento.models';
import { EditarDetallemovimientoComponent } from '../detallemovimiento/editar-detallemovimiento/editar-detallemovimiento.component';
import { InsertarDetallemovimientoComponent } from '../detallemovimiento/insertar-detallemovimiento/insertar-detallemovimiento.component';

import { ExporterService } from '../exportaciones/exporter.service';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movimientos-general',
  templateUrl: './movimientos-general.component.html',
  styleUrls: ['./movimientos-general.component.css']
})
export class MovimientosGENERALComponent implements OnInit, AfterViewInit {
    displayedColumnsInventario: string[] = [
      'Id', 'IdTipoMov', 'IdAlmacen', 'FechaMovimiento', 'Estatus',
      'NombreAlmacen', 'NombreMovimiento', 'FechaActualiza', 'UsuarioActualiza', 
      'Tipo_Descripcion', 'Acciones'
    ];
    dataSourceInventario = new MatTableDataSource<MovimientosInventario>();
    @ViewChild('paginatorInventario') paginatorInventario!: MatPaginator;
  
    displayedColumnsDetalle: string[] = [
      'Id', 'Codigo', 'IdMovimiento', 'Cantidad', 'Costo', 'Estatus', 
      'FechaActualiza', 'UsuarioActualiza', 'Descripcion', 'Acciones'
    ];
    dataSourceDetalle = new MatTableDataSource<Detallemovimiento>();
    @ViewChild('paginatorDetalle') paginatorDetalle!: MatPaginator;

    data: number | null = null;


  
    constructor(
      private movimientosinventarioService: MovimientosinventarioService,
      private detallemovimientoService: DetallemovimientoService,
      public dialog: MatDialog,
      private excelService: ExporterService
    ) {}
  
    ngOnInit() {
      this.dataSourceInventario.filterPredicate = (
        data: MovimientosInventario, filter: string
      ) => data.NombreMovimiento.toLowerCase().includes(filter) || 
           data.Id.toString().includes(filter);
  
      this.movimientosinventarioService.getDepartamentos().subscribe({
        next: (response) => {
          console.log('Respuesta del servidor (Inventario):', response.response.data);
          if (response.success) {
            this.dataSourceInventario.data = response.response.data;
          }
        },
        error: (error) => console.error('Error al obtener datos de inventario:', error)
      });
  
      this.dataSourceDetalle.filterPredicate = (
        data: Detallemovimiento, filter: string
      ) => data.Codigo.toLowerCase().includes(filter) || 
           data.Id.toString().includes(filter);
  
      this.detallemovimientoService.getDepartamentos().subscribe({
        next: (response) => {
          console.log('Respuesta del servidor (Detalle):', response.response.data);
          if (response.success) {
            this.dataSourceDetalle.data = response.response.data;
          }
        },
        error: (error) => console.error('Error al obtener datos de detalle:', error)
      });
    }
  
  
  
  
    ngAfterViewInit() {
      this.dataSourceInventario.paginator = this.paginatorInventario;
      this.dataSourceDetalle.paginator = this.paginatorDetalle;
    }
  
    exportAsXLSXInventario(): void {
      this.excelService.exportToExcel(this.dataSourceInventario.data, 'inventario_export');
    }
  
    exportAsXLSXFilteredInventario(): void {
      this.excelService.exportToExcel(this.dataSourceInventario.filteredData, 'inventario_export');
    }
  
    exportAsXLSXDetalle(): void {
      this.excelService.exportToExcel(this.dataSourceDetalle.data, 'detalle_export');
    }
  
    exportAsXLSXFilteredDetalle(): void {
      this.excelService.exportToExcel(this.dataSourceDetalle.filteredData, 'detalle_export');
    }
  
    applyFilterInventario(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceInventario.filter = filterValue.trim().toLowerCase();
      if (this.dataSourceInventario.paginator) {
        this.dataSourceInventario.paginator.firstPage();
      }
    }
  
    applyFilterDetalle(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceDetalle.filter = filterValue.trim().toLowerCase();
      if (this.dataSourceDetalle.paginator) {
        this.dataSourceDetalle.paginator.firstPage();
      }
    }
  
    abrirInsertarModalInventario() {
      const dialogRef = this.dialog.open(InsertarMovimientosinventarioComponent, {
        width: '550px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close result if needed
      });
    }
  
    abrirEditarModalInventario(inventario: MovimientosInventario) {
      const dialogRef = this.dialog.open(EditarMovimientosinventarioComponent, {
        width: '550px',
        data: inventario,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close result if needed
      });
    }
  
    eliminarInventario(Id: number) {
      if (confirm('¿Estás seguro de que deseas eliminar este movimiento de inventario?')) {
        Swal.fire({
          title: '¡Se han eliminado los datos!',
          icon: 'success',
        }).then(result => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
  
        this.movimientosinventarioService.eliminarDepartamento(Id).subscribe({
          next: () => {
            this.dataSourceInventario.data = this.dataSourceInventario.data.filter(
              (inventario: MovimientosInventario) => inventario.Id !== Id
            );
          },
          error: (error) => console.error('Error al eliminar el inventario:', error)
        });
      }
    }
  
    abrirInsertarModalDetalle() {
      const dialogRef = this.dialog.open(InsertarDetallemovimientoComponent, {
        width: '550px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close result if needed
      });
    }
  
    abrirEditarModalDetalle(detalle: Detallemovimiento) {
      const dialogRef = this.dialog.open(EditarDetallemovimientoComponent, {
        width: '550px',
        data: detalle,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close result if needed
      });
    }
  
    eliminarDetalle(Id: number) {
      if (confirm('¿Estás seguro de que deseas eliminar este detalle de movimiento?')) {
        this.detallemovimientoService.eliminarDepartamento(Id).subscribe({
          next: () => {
            this.dataSourceDetalle.data = this.dataSourceDetalle.data.filter(
              (detalle: Detallemovimiento) => detalle.Id !== Id
            );
  
            Swal.fire({
              title: '¡Se ha eliminado correctamente!',
              icon: 'success',
            }).then(result => {
              if (result.isConfirmed) {
                location.reload();
              }
            });
          },
          error: (error) => console.error('Error al eliminar el detalle:', error)
        });
      }
    }
  }