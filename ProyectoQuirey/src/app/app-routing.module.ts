import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
// import { InputDeviceInfo } from './input-device-info/input-device-info.component'; // Asegúrate de importar el componente correspondiente

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la ruta base a /login
  { path: 'login', component: LoginComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'input', component: InputDeviceInfo },
  // Otras rutas de tu aplicación pueden ir aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
