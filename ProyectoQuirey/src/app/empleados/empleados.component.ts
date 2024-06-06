import { Component, ViewChild } from '@angular/core';
import { empleados } from '../Models/empleados.models';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadosService } from '../empleados.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertarEmpleadosComponent } from 'src/app/empleados/insertar-empleados/insertar-empleados.component';
import { EditarEmpleadosComponent } from 'src/app/empleados/editar-empleados/editar-empleados.component';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent {
  displayedColumns: string[] = [
    'Id',
    'Matricula',
    'Puestos',
    'Perfil',
    'FechaHora',
    'Activo',
    'Usuario',
    'IdPersona',
    'Acciones',
  ];


  dataSource = new MatTableDataSource<empleados>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(
    private ticketsService: EmpleadosService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<empleados>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: empleados, filter: string) => {
      return (
        data.idPersona.toString().includes(filter) ||
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
    const dialogRef = this.dialog.open(InsertarEmpleadosComponent, {
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
            (clientes: empleados) => clientes.Id !== Id
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

  abrirEditarModal(clientes: empleados) {
    const dialogRef = this.dialog.open(EditarEmpleadosComponent, {
      width: '550px',
      data: clientes, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
