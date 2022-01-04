import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalMed } from '../model/PersonalMed';
import { PersonalMedService } from '../service/personal-service.service';


@Component({
  selector: 'app-form-personal-med',
  templateUrl: './form-personal-med.component.html',
  styleUrls: ['./form-personal-med.component.css']
})
export class FormPersonalMedComponent implements OnInit {

  constructor(private personalMedService:  PersonalMedService) { }

  public personalMed : PersonalMed = new PersonalMed();

  public editar: boolean = false;
  public guardar: boolean = false;

  formPersonalMed = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombre1: new FormControl('',Validators.required),
    nombre2: new FormControl(''),
    apellido1: new FormControl('',Validators.required),
    apellido2: new FormControl(''),
    telefono: new FormControl('',Validators.required),
    fechaNacimiento: new FormControl('',Validators.required),
    especializacionId: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  enviarDatos(){
    this.personalMed.cedula=this.formPersonalMed.get("cedula")?.value;
    if(this.formPersonalMed.get("nombre2")?.value == ""){
      this.personalMed.nombre=this.formPersonalMed.get("nombre1")?.value;
    }else{
      this.personalMed.nombre=this.formPersonalMed.get("nombre1")?.value.concat(" ",this.formPersonalMed.get("nombre2")?.value);
    }
    if(this.formPersonalMed.get("apellido2")?.value == ""){
      this.personalMed.apellido=this.formPersonalMed.get("apellido1")?.value;
    }else{
      this.personalMed.apellido=this.formPersonalMed.get("apellido1")?.value.concat(" ",this.formPersonalMed.get("apellido2")?.value);
    }
    this.personalMed.telefono=this.formPersonalMed.get("telefono")?.value;
    this.personalMed.fechaNacimiento=this.formPersonalMed.get("fechaNacimiento")?.value;
    this.personalMed.especializacionId=this.formPersonalMed.get("especializacionId")?.value;
    
    this.personalMedService.guardarDatos(this.personalMed).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})

  }
  

}
