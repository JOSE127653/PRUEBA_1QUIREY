import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Editarempleados } from 'src/app/Models/empleados.models';
import { EmpleadosService } from 'src/app/empleados.service';
import Swal from 'sweetalert2';
import { PuestosService } from 'src/app/puestos.service';
import { PerfilesService } from 'src/app/perfiles.service';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css'],
})
export class EditarEmpleadosComponent implements OnInit {
  tickets: Editarempleados;
  mySelect: (string | number)[] = [];
  selectedValuePuestos: any;
  selectedValuePerfiles: any;
  selectedValueidPersona: any;
  puestos: any;
  perfiles: any;
  idpersona: any;

  idpuestoslistDepartamento: number = 0;
  idperfileslistDepartamento: number = 0;
  idpersonaslistDepartamento: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EditarEmpleadosComponent>,
    private ticketsService: EmpleadosService,
    private puestosservice:PuestosService,
    private perfilesservice:PerfilesService,
    private personaservice:PersonasService,
    @Inject(MAT_DIALOG_DATA) public data: Editarempleados
  ) {
    // Clona los datos recibidos para evitar la mutación directa
    this.tickets = { ...data };
  }
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
      console.log('puesto seleccionado:', this.idpuestoslistDepartamento);
      
    }
  }
  selectChangePerfiles() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('perfil seleccionado:', this.idperfileslistDepartamento);
      
    }
  }
  selectChangePersonas() {
    if (this.mySelect.length > 0) {
      // Por ejemplo, seleccionando el primer elemento de mySelect
      const selectedItemId = this.mySelect[0]; // o cualquier otra lógica para obtener un solo valor
      console.log('persona seleccionada:', this.idpersonaslistDepartamento);
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

  guardar(): void {
    // Verificar si algún campo obligatorio está vacío
    this.tickets.idPersona = this.idpersonaslistDepartamento;
    this.tickets.Puesto = this.idpuestoslistDepartamento;
    this.tickets.Perfil = this.idperfileslistDepartamento;

    if (
      !this.tickets.Matricula ||
      !this.tickets.Puesto ||
      !this.tickets.Perfil ||
      !this.tickets.idPersona ||
      // !this.tickets.Activo ||
      !this.tickets.Usuario
    ) {
      Swal.fire({
        title: 'Por favor, complete todos los campos obligatorios.',
        // text: 'Por favor, complete todos los campos obligatorios.',
        icon: 'error',
      });
      return; // Detener la ejecución del método si algún campo está vacío
    }

    // Si todos los campos están completos, proceder con la actualización
    this.ticketsService.actualizarTickets(this.tickets).subscribe({
      next: (response) => {
        // Cerrar la modal y posiblemente actualizar la tabla
        this.dialogRef.close(this.tickets);

        Swal.fire({
          title: 'Se han modificado correctamente los datos!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      error: (error) => {
        // Manejar errores aquí
      },
    });
  }
}
