import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormEspecializacionComponent } from './form-especializacion/form-especializacion.component';
import { FormHistoriaClinicaComponent } from './form-historia-clinica/form-historia-clinica.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { FormPersonalMedComponent } from './form-personal-med/form-personal-med.component';
import { TablaEspecializacionComponent } from './tabla-especializacion/tabla-especializacion.component';
import { TablaHistoriaClinicaComponent } from './tabla-historia-clinica/tabla-historia-clinica.component';
import { TablaPacienteComponent } from './tabla-paciente/tabla-paciente.component';
import { TablaPeronalMedComponent } from './tabla-peronal-med/tabla-peronal-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormEspecializacionComponent,
    FormHistoriaClinicaComponent,
    FormPacienteComponent,
    FormPersonalMedComponent,
    TablaEspecializacionComponent,
    TablaHistoriaClinicaComponent,
    TablaPacienteComponent,
    TablaPeronalMedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
