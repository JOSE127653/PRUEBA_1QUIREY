import { Component, ViewChild } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Personas } from '../Models/personas.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { InsertarPersonasComponent } from './insertar-personas/insertar-personas.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  displayedColumns: string[] = [
    'Id',
    'Nombre',
    'ApPaterno',
    'ApMaterno',
    'Curp',
    'Direccion',
    'FechaHora',
    'Activo',
    'Usuario',
    'Acciones',
  ];
 

  dataSource = new MatTableDataSource<Personas>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private personasService: PersonasService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Personas>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Personas, filter: string) => {
      return (
        data.Nombre.toLowerCase().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.personasService.getDepartamentos().subscribe({
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
    const dialogRef = this.dialog.open(InsertarPersonasComponent, {
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

      this.personasService.eliminarDepartamento(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (departamento: Personas) => departamento.Id !== Id
          );
        },
        error: (error) => {
          console.error('Hubo un error al eliminar el departamento', error);
        },
      });
    }
  }

  abrirEditarModal(departamento: Personas) {
    const dialogRef = this.dialog.open(EditarPersonasComponent, {
      width: '550px',
      data: departamento, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
