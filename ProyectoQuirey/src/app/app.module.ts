import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ControlPanelComponent } from './control-panel/control-panel.component';
//import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
//import { InsertarComponent } from './insertar/insertar.component';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { ClientesComponent } from './clientes/clientes.component';
import { ControlPanelClientesComponent } from './clientes/control-panel-clientes/control-panel-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { InsertarClientesComponent } from './clientes/insertar-clientes/insertar-clientes.component';

import { ControlPanelAlmacenesComponent } from './almacenes/control-panel-almacenes/control-panel-almacenes.component';
import { EditarAlmacenesComponent } from './almacenes/editar-almacenes/editar-almacenes.component';
import { InsertarAlmacenesComponent } from './almacenes/insertar-almacenes/insertar-almacenes.component';

import { ArticulosComponent } from './articulos/articulos.component';
import { ControlPanelArticulosComponent } from './articulos/control-panel-articulos/control-panel-articulos.component';
import { EditarArticulosComponent } from './articulos/editar-articulos/editar-articulos.component';
import { InsertarArticulosComponent } from './articulos/insertar-articulos/insertar-articulos.component';
import { RutasComponent } from './rutas/rutas.component';
import { ControlPanelRutasComponent } from './rutas/control-panel-rutas/control-panel-rutas.component';
import { EditarRutasComponent } from './rutas/editar-rutas/editar-rutas.component';
import { InsertarRutasComponent } from './rutas/insertar-rutas/insertar-rutas.component';
import { DetalleticketsComponent } from './detalletickets/detalletickets.component';
import { ControlPanelDetalleticketsComponent } from './detalletickets/control-panel-detalletickets/control-panel-detalletickets.component';
import { EditarDetalleticketsComponent } from './detalletickets/editar-detalletickets/editar-detalletickets.component';
import { InsertarDetalleticketsComponent } from './detalletickets/insertar-detalletickets/insertar-detalletickets.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ControlPanelTicketsComponent } from './tickets/control-panel-tickets/control-panel-tickets.component';
import { EditarTicketsComponent } from './tickets/editar-tickets/editar-tickets.component';
import { InsertarTicketsComponent } from './tickets/insertar-tickets/insertar-tickets.component';

import { ExistenciasComponent } from './existencias/existencias.component';
import { ControlPanelExistenciasComponent } from './existencias/control-panel-existencias/control-panel-existencias.component';
import { EditarExistenciasComponent } from './existencias/editar-existencias/editar-existencias.component';
import { InsertarExistenciasComponent } from './existencias/insertar-existencias/insertar-existencias.component';
import { MovimientosinventarioComponent } from './movimientosinventario/movimientosinventario.component';
import { ControlPanelMovimientosinventarioComponent } from './movimientosinventario/control-panel-movimientosinventario/control-panel-movimientosinventario.component';
import { EditarMovimientosinventarioComponent } from './movimientosinventario/editar-movimientosinventario/editar-movimientosinventario.component';
import { InsertarMovimientosinventarioComponent } from './movimientosinventario/insertar-movimientosinventario/insertar-movimientosinventario.component';
import { PersonasComponent } from './personas/personas.component';

//import { ControlPanelPersonasComponent } from './control-panel-personas/control-panel-personas.component';
import { ControlPanelPersonasComponent } from './personas/control-panel-personas/control-panel-personas.component';

//import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
import { EditarPersonasComponent } from './personas/editar-personas/editar-personas.component';
import { InsertarPersonasComponent } from './personas/insertar-personas/insertar-personas.component';
import { DetallemovimientoComponent } from './detallemovimiento/detallemovimiento.component';
import { ControlPanelDetallemovimientoComponent } from './detallemovimiento/control-panel-detallemovimiento/control-panel-detallemovimiento.component';
import { InsertarDetallemovimientoComponent } from './detallemovimiento/insertar-detallemovimiento/insertar-detallemovimiento.component';
import { EditarDetallemovimientoComponent } from './detallemovimiento/editar-detallemovimiento/editar-detallemovimiento.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { ControlPanelUsuariosComponent } from './usuarios/control-panel-usuarios/control-panel-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { InsertarUsuariosComponent } from './usuarios/insertar-usuarios/insertar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleperfilComponent } from './detalleperfil/detalleperfil.component';
import { ControlPanelDetalleperfilComponent } from './detalleperfil/control-panel-detalleperfil/control-panel-detalleperfil.component';
import { EditarDetalleperfilComponent } from './detalleperfil/editar-detalleperfil/editar-detalleperfil.component';
import { InsertarDetalleperfilComponent } from './detalleperfil/insertar-detalleperfil/insertar-detalleperfil.component';
import { ModulosusuarioComponent } from './modulosusuario/modulosusuario.component';
import { ControlPanelModulosusuarioComponent } from './modulosusuario/control-panel-modulosusuario/control-panel-modulosusuario.component';
import { EditarModulosusuarioComponent } from './modulosusuario/editar-modulosusuario/editar-modulosusuario.component';
import { InsertarModulosusuarioComponent } from './modulosusuario/insertar-modulosusuario/insertar-modulosusuario.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ControlPanelEmpleadosComponent } from './empleados/control-panel-empleados/control-panel-empleados.component';
import { EditarEmpleadosComponent } from './empleados/editar-empleados/editar-empleados.component';
import { InsertarEmpleadosComponent } from './empleados/insertar-empleados/insertar-empleados.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ControlPanelModulosComponent } from './modulos/control-panel-modulos/control-panel-modulos.component';
import { EditarModulosComponent } from './modulos/editar-modulos/editar-modulos.component';
import { InsertarModulosComponent } from './modulos/insertar-modulos/insertar-modulos.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { ControlPanelPerfilesComponent } from './perfiles/control-panel-perfiles/control-panel-perfiles.component';
import { EditarPerfilesComponent } from './perfiles/editar-perfiles/editar-perfiles.component';
import { InsertarPerfilesComponent } from './perfiles/insertar-perfiles/insertar-perfiles.component';
import { SucursalsedeComponent } from './sucursalsede/sucursalsede.component';
import { ControlPanelSucursalsedeComponent } from './sucursalsede/control-panel-sucursalsede/control-panel-sucursalsede.component';
import { EditarSucursalsedeComponent } from './sucursalsede/editar-sucursalsede/editar-sucursalsede.component';
import { InsertarSucursalsedeComponent } from './sucursalsede/insertar-sucursalsede/insertar-sucursalsede.component';
import { PuestosComponent } from './puestos/puestos.component';
import { ControlPanelPuestosComponent } from './puestos/control-panel-puestos/control-panel-puestos.component';
import { EditarPuestosComponent } from './puestos/editar-puestos/editar-puestos.component';
import { InsertarPuestosComponent } from './puestos/insertar-puestos/insertar-puestos.component';
import { CategoriamodulosComponent } from './categoriamodulos/categoriamodulos.component';
import { ControlPanelCategoriamodulosComponent } from './categoriamodulos/control-panel-categoriamodulos/control-panel-categoriamodulos.component';
import { EditarCategoriamodulosComponent } from './categoriamodulos/editar-categoriamodulos/editar-categoriamodulos.component';
import { InsertarCategoriamodulosComponent } from './categoriamodulos/insertar-categoriamodulos/insertar-categoriamodulos.component';
import { UnidadmedidaComponent } from './unidadmedida/unidadmedida.component';
import { ControlPanelUnidadmedidaComponent } from './unidadmedida/control-panel-unidadmedida/control-panel-unidadmedida.component';
import { EditarUnidadMedidaComponent } from './unidadmedida/editar-unidadmedida/editar-unidadmedida.component';
import { InsertarUnidadmedidaComponent } from './unidadmedida/insertar-unidadmedida/insertar-unidadmedida.component';
import { InicioComponent } from './inicio/inicio.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const appRoutes: Routes = [
  //{path:'controlPanel', component:ControlPanelAlmacenesComponent},
 
  { path: 'almacenes', component: AlmacenesComponent }, //
  { path: 'articulos', component: ArticulosComponent }, //
  { path: 'clientes', component: ClientesComponent }, //

  { path: 'rutas', component: RutasComponent }, //
  { path: 'tickets', component: TicketsComponent },

  { path: 'existencias', component: ExistenciasComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'detalletickets', component: DetalleticketsComponent },

  { path: 'movimientosinventario', component: MovimientosinventarioComponent },

  { path: 'detallemovimiento', component: DetallemovimientoComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  //aqui
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'detalleperfil', component: DetalleperfilComponent },

  { path: 'modulosusuario', component: ModulosusuarioComponent },

  { path: 'empleados', component: EmpleadosComponent }, //

  { path: 'modulos', component: ModulosComponent }, //

  { path: 'perfiles', component: PerfilesComponent }, //

  { path: 'sucursalsede', component: SucursalsedeComponent }, //

  { path: 'puestos', component: PuestosComponent }, //

  { path: 'categoriamodulos', component: CategoriamodulosComponent }, //
  //Falta menu
  { path: 'unidadmedida', component: UnidadmedidaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlmacenesComponent,
    AlmacenesComponent,
    ControlPanelAlmacenesComponent,
    EditarAlmacenesComponent,
    InsertarAlmacenesComponent,
    ArticulosComponent,
    ControlPanelArticulosComponent,
    EditarArticulosComponent,
    InsertarArticulosComponent,
    ClientesComponent,
    ControlPanelClientesComponent,
    EditarClientesComponent,
    InsertarClientesComponent,

    RutasComponent,
    ControlPanelRutasComponent,
    EditarRutasComponent,
    InsertarRutasComponent,
    DetalleticketsComponent,
    ControlPanelDetalleticketsComponent,
    EditarDetalleticketsComponent,
    InsertarDetalleticketsComponent,
    TicketsComponent,
    ControlPanelTicketsComponent,
    EditarTicketsComponent,
    InsertarTicketsComponent,
    ExistenciasComponent,
    ControlPanelExistenciasComponent,
    EditarExistenciasComponent,
    InsertarExistenciasComponent,
    MovimientosinventarioComponent,
    ControlPanelMovimientosinventarioComponent,
    EditarMovimientosinventarioComponent,
    InsertarMovimientosinventarioComponent,

    PersonasComponent,
    ControlPanelPersonasComponent,
    EditarPersonasComponent,
    InsertarPersonasComponent,
    DetallemovimientoComponent,
    ControlPanelDetallemovimientoComponent,
    InsertarDetallemovimientoComponent,
    EditarDetallemovimientoComponent,

    LoginComponent,
    ControlPanelUsuariosComponent,
    EditarUsuariosComponent,
    InsertarUsuariosComponent,
    UsuariosComponent,
    DetalleperfilComponent,
    ControlPanelDetalleperfilComponent,
    EditarDetalleperfilComponent,
    InsertarDetalleperfilComponent,
    ModulosusuarioComponent,
    ControlPanelModulosusuarioComponent,
    EditarModulosusuarioComponent,
    InsertarModulosusuarioComponent,
    EmpleadosComponent,
    ControlPanelEmpleadosComponent,
    EditarEmpleadosComponent,
    InsertarEmpleadosComponent,
    ModulosComponent,
    ControlPanelModulosComponent,
    EditarModulosComponent,
    InsertarModulosComponent,
    PerfilesComponent,
    ControlPanelPerfilesComponent,
    EditarPerfilesComponent,
    InsertarPerfilesComponent,
    SucursalsedeComponent,
    ControlPanelSucursalsedeComponent,
    EditarSucursalsedeComponent,
    InsertarSucursalsedeComponent,
    PuestosComponent,
    ControlPanelPuestosComponent,
    EditarPuestosComponent,
    InsertarPuestosComponent,
    CategoriamodulosComponent,
    ControlPanelCategoriamodulosComponent,
    EditarCategoriamodulosComponent,
    InsertarCategoriamodulosComponent,
    UnidadmedidaComponent,
    ControlPanelUnidadmedidaComponent,
    EditarUnidadMedidaComponent,
    InsertarUnidadmedidaComponent,
    InicioComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
