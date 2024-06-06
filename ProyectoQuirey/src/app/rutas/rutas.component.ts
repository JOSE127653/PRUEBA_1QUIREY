import { Component, ViewChild } from '@angular/core';
import { rutas } from '../Models/rutas.models';
import { MatTableDataSource } from '@angular/material/table';
import { RutasService } from '../rutas.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertarRutasComponent } from 'src/app/rutas/insertar-rutas/insertar-rutas.component';
import { EditarRutasComponent } from 'src/app/rutas/editar-rutas/editar-rutas.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
})
export class RutasComponent {
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'Estatus',
    'UsuarioActualiza',
    'FechaActualiza',
    'Acciones',
  ];


  
  dataSource = new MatTableDataSource<rutas>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private rutasService: RutasService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<rutas>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: rutas, filter: string) => {
      return (
        data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.rutasService.getRutas().subscribe({
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
    const dialogRef = this.dialog.open(InsertarRutasComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarRutas(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta ruta?')) {
      Swal.fire({
        title: 'Se han eliminado los datos!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
      //location.reload();
      this.rutasService.eliminarRutas(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (rutas: rutas) => rutas.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar la ruta', error);
        },
      });
    }
  }

  abrirEditarModal(rutas: rutas) {
    const dialogRef = this.dialog.open(EditarRutasComponent, {
      width: '550px',
      data: rutas, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
