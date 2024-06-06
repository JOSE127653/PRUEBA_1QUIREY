import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/empleados.service';
import Swal from 'sweetalert2';
import { PuestosService } from 'src/app/puestos.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-insertar-empleados',
  templateUrl: './insertar-empleados.component.html',
  styleUrls: ['./insertar-empleados.component.css'],
})
export class InsertarEmpleadosComponent {
  mySelect: (string | number)[] = [];
  selectedValuePuestos: any;
  selectedValuePerfiles: any;
  selectedValueidPersona: any;
  puestos: any;
  perfiles: any;
  idpersona: any;

  Matricula: number = 1;
  Puestos: number = 1;
  idpuestoslistDepartamento: number = 0;
  idperfileslistDepartamento: number = 0;
  idpersonaslistDepartamento: number = 0;
  Perfil: number = 1;
  Usuario: number = 1;
  IdPersona: number = 1;

  constructor(
    public dialogRef: MatDialogRef<InsertarEmpleadosComponent>,
    private ticketsService: EmpleadosService,
    private puestosservice:PuestosService,
    private perfilesservice:PerfilesService,
    private personaservice:PersonasService
  ) {}
  getPuestos() {
    this.puestosservice.getDepartamentos().subscribe((res) => {
      this.puestos = res.response.data; // Cambia aquí
      console.log(res);
    });
    
  }
  getPerfiles() {
    this.perfilesservice.getDepartamentos().subscribe((res) => {
      this.perfiles = res.response.data; // Cambia aquí
      console.log(res);
    });
    
  }
  getpersona() {
    this.personaservice.getDepartamentos().subscribe((res) => {
      this.idpersona = res.response.data; // Cambia aquí
      console.log(res);
    });
    
  }
  selectChangePuestos() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValuePuestos = this.puestosservice.getDropDownText(
        selectedItemId,
        this.puestos
      );
    }
  }
  selectChangePerfiles() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValuePerfiles = this.perfilesservice.getDropDownText(
        selectedItemId,
        this.perfiles
      );
    }
  }
  selectChangePersonas() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      this.selectedValueidPersona = this.personaservice.getDropDownText(
        selectedItemId,
        this.idpersona
      );
    }
  }
  ngOnInit(): void {
    this.getPuestos();
    this.getPerfiles();
    this.getpersona();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  insertar(): void {
    // Verifica si algún campo obligatorio está vacío
    if (
      !this.Matricula ||
      !this.idpuestoslistDepartamento ||
      !this.idperfileslistDepartamento ||
      !this.Usuario ||
      !this.idpersonaslistDepartamento
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
      });
      return; // Detiene la ejecución del método
    }

    const nuevoTickets = {
      Matricula: this.Matricula,
      Puestos: this.Puestos,
      Perfil: this.Perfil,
      Usuario: this.Usuario,
      IdPersona: this.IdPersona,
      // ...otros campos si los hay
    };

    this.ticketsService.insertarTickets(nuevoTickets).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        // location.reload();

        Swal.fire({
          title: 'Se han insertado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        console.error('Hubo un error al insertar el tickets', error);
      },
    });
  }
}
