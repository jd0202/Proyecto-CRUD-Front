import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-personal-med',
  templateUrl: './form-personal-med.component.html',
  styleUrls: ['./form-personal-med.component.css']
})
export class FormPersonalMedComponent implements OnInit {

  constructor() { }

  formPersonalMed = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre1: new FormControl('',Validators.required),
    nombre2: new FormControl('',Validators.required),
    apellido1: new FormControl('',Validators.required),
    apellido2: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    fechaNacimiento: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }

  enviarDatos(){
    
  }

}
