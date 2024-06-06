import { Component, ViewChild } from '@angular/core';
import { MovimientosinventarioService } from '../movimientosinventario.service';
import { MovimientosInventario } from '../Models/movimientosinventario.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { InsertarMovimientosinventarioComponent } from './insertar-movimientosinventario/insertar-movimientosinventario.component';
import { EditarMovimientosinventarioComponent } from './editar-movimientosinventario/editar-movimientosinventario.component';

import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movimientosinventario',
  templateUrl: './movimientosinventario.component.html',
  styleUrls: ['./movimientosinventario.component.css'],
})
export class MovimientosinventarioComponent {
  displayedColumns: string[] = [
    'Id',
    'IdTipoMov',
    'IdAlmacen',
    'FechaMovimiento',
    'Estatus',
    'NombreAlmacen',
    'NombreMovimiento',
    'FechaActualiza',
    'UsuarioActualiza',
    'Tipo_Descripcion',
    'Acciones',
  ];
 

  dataSource = new MatTableDataSource<MovimientosInventario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private movimientosinventarioService: MovimientosinventarioService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<MovimientosInventario>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (
      data: MovimientosInventario,
      filter: string
    ) => {
      return (
        data.NombreMovimiento.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.movimientosinventarioService.getDepartamentos().subscribe({
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
    const dialogRef = this.dialog.open(InsertarMovimientosinventarioComponent, {
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

      this.movimientosinventarioService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: MovimientosInventario) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: MovimientosInventario) {
    const dialogRef = this.dialog.open(EditarMovimientosinventarioComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
