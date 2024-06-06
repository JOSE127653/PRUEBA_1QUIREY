import { Component, ViewChild } from '@angular/core';
import { DetallePerfil } from '../Models/detalleperfil.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InsertarDetalleperfilComponent } from './insertar-detalleperfil/insertar-detalleperfil.component';
import { EditarDetalleperfilComponent } from './editar-detalleperfil/editar-detalleperfil.component';
import { DetalleperfilService } from '../detalleperfil.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-detalleperfil',
  templateUrl: './detalleperfil.component.html',
  styleUrls: ['./detalleperfil.component.css'],
})
export class DetalleperfilComponent {
  displayedColumns: string[] = [
    'Id',
    'IdPerfil',
    'IdModulo',
    'FechaHora',
    'Activo',
    'Usuario',
    'Acciones',
  ];


  dataSource = new MatTableDataSource<DetallePerfil>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  

  constructor(
    private detalleperfilService: DetalleperfilService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<DetallePerfil>(); // Inicializa dataSource como una instancia de MatTableDataSource
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: DetallePerfil, filter: string) => {
      return (
        data.IdPerfil.toString().includes(filter) ||
        data.Id.toString().includes(filter)
      ); // Puedes añadir más campos si es necesario
    };
    this.detalleperfilService.getDetalleperfil().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor', response.response.data);
        if (response.success) {
          this.dataSource.data = response.response.data;
        }
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
    const dialogRef = this.dialog.open(InsertarDetalleperfilComponent, {
      width: '550px',
      // Puedes pasar datos al componente de la modal si es necesario
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Manejar los resultados cuando la modal se cierre
    });
  }

  eliminarDetalleperfil(Id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.detalleperfilService.eliminarDetalleperfil(Id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter(
            (detalleperfil: DetallePerfil) => detalleperfil.Id !== Id
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

  abrirEditarModal(detalleperfil: DetallePerfil) {
    const dialogRef = this.dialog.open(EditarDetalleperfilComponent, {
      width: '550px',
      data: detalleperfil, // Pasa el objeto de departamento a la modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
