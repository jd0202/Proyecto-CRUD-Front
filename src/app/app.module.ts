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
import { TablaPersonalMedComponent } from './tabla-personal-med/tabla-personal-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MegaMenuModule} from 'primeng/megamenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



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
    TablaPersonalMedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    AccordionModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    InputTextModule,
    CalendarModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
