import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEspecializacionComponent } from './form-especializacion/form-especializacion.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { FormPersonalMedComponent } from './form-personal-med/form-personal-med.component';
import { MenuComponent } from './menu/menu.component';
import { TablaEspecializacionComponent } from './tabla-especializacion/tabla-especializacion.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent },
  {path: 'formEspecializacion', component: FormEspecializacionComponent },
  {path: 'formPaciente', component: FormPacienteComponent },
  {path: 'formPersonaMed', component: FormPersonalMedComponent },
  {path: 'tablaEspecializacion', component: TablaEspecializacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
