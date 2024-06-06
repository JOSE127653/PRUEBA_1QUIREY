import { Component, ViewChild } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Articulos } from '../Models/articulos.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarArticulosComponent } from './insertar-articulos/insertar-articulos.component';
import { EditarArticulosComponent } from './editar-articulos/editar-articulos.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
  displayedColumns: string[] = [
    'Id',
    'Codigo',
    'Descripcion',
    'UnidadMedida',
    'Costo',
    'Precio',
    'Estatus',
    'UsuarioActualiza',
    'FechaActualiza',
    'Acciones',
  ];

 dataSource = new MatTableDataSource<Articulos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private articulosService: ArticulosService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Articulos>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Articulos, filter: string) => {
      return (
        data.Codigo.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.articulosService.getDepartamentos().subscribe({
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
    const dialogRef = this.dialog.open(InsertarArticulosComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarDepartamento(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.articulosService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Articulos) => departamento.Id !== Id
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
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Articulos) {
    const dialogRef = this.dialog.open(EditarArticulosComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
