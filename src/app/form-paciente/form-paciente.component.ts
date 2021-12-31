import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  constructor() { }
  
  formPaciente = new FormGroup({
    tipoDocumento: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    nombre1: new FormControl('',Validators.required),
    nombre2: new FormControl('',Validators.required),
    apellido1: new FormControl('',Validators.required),
    apellido2: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    estadoCivil: new FormControl('',Validators.required),
    grupoSanguineo: new FormControl('',Validators.required),
    fechaNacimiento: new FormControl('',Validators.required),
    lugarNacimiento: new FormControl('',Validators.required),
    religion: new FormControl('',Validators.required),
    etnia: new FormControl('',Validators.required),
    tipoPoblacion: new FormControl('',Validators.required),
    ocupacion: new FormControl('',Validators.required),
    identidadGenero: new FormControl('',Validators.required),
  })


  ngOnInit(): void {
  }

  enviarDatos(){

  }

}
