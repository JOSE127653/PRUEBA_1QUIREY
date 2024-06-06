import { Component, ViewChild } from '@angular/core';
import { ModulosService } from '../modulos.service';
import { Modulos } from '../Models/modulos.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarModulosComponent } from './insertar-modulos/insertar-modulos.component';
import { EditarModulosComponent } from './editar-modulos/editar-modulos.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css'],
})
export class ModulosComponent {
  displayedColumns: string[] = [
    'Id',
    'Modulo',
    'FechaHora',
    'Activo',
    'Usuario',
    'IdCategoria',
    'Acciones',
  ];

  
  dataSource = new MatTableDataSource<Modulos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private modulosService: ModulosService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Modulos>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Modulos, filter: string) => {
      return (
        //data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.modulosService.getDepartamentos().subscribe({
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
    const dialogRef = this.dialog.open(InsertarModulosComponent, {
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

      this.modulosService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Modulos) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Modulos) {
    const dialogRef = this.dialog.open(EditarModulosComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
