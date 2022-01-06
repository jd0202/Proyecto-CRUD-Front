import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalMed } from '../model/PersonalMed';
import { PersonalMedService } from '../service/personal-med-service.service';


@Component({
  selector: 'app-form-personal-med',
  templateUrl: './form-personal-med.component.html',
  styleUrls: ['./form-personal-med.component.css']
})
export class FormPersonalMedComponent implements OnInit, OnChanges {

  constructor(private personalMedService:  PersonalMedService) { }

  public personalMed : PersonalMed = new PersonalMed();

  @Input() public guardar: boolean = false;
  @Input() public editar: boolean = false;
  @Input() public id : number = 0;
  @Output() abrirMenu = new EventEmitter<any>();

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

  ngOnChanges(): void {
    if(this.editar){
      this.edit();
    }
  }

  ngOnInit(): void {
  }
  
  obtenerDatosFormulario(): void{
    this.personalMed.cedula=this.formPersonalMed.get("cedula")?.value;
    this.personalMed.nombre1=this.formPersonalMed.get("nombre1")?.value;
    this.personalMed.nombre2=this.formPersonalMed.get("nombre2")?.value;
    this.personalMed.apellido1=this.formPersonalMed.get("apellido1")?.value;
    this.personalMed.apellido2=this.formPersonalMed.get("apellido2")?.value;
    this.personalMed.telefono=this.formPersonalMed.get("telefono")?.value;
    this.personalMed.fechaNacimiento=this.formPersonalMed.get("fechaNacimiento")?.value;
    this.personalMed.especializacionId=this.formPersonalMed.get("especializacionId")?.value;
  }

  enviarDatos(): void{
    this.obtenerDatosFormulario();
    
    this.personalMedService.guardarDatos(this.personalMed).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");});
    this.abrirMenu.emit();
  }

  edit(): void{

    this.personalMedService.obtenerPersonalMedPorId(this.id).subscribe(respuesta=>{
      this.formPersonalMed.setValue({
        cedula: respuesta.cedula,
        nombre1: respuesta.nombre1,
        nombre2: respuesta.nombre2,
        apellido1: respuesta.apellido1,
        apellido2: respuesta.apellido2,
        telefono: respuesta.telefono,
        fechaNacimiento: new Date(respuesta.fechaNacimiento),
        especializacionId: respuesta.especializacionId
      });
    },error=>{console.log("error")});
  }

  editarDatos(): void{
    this.personalMed.id=this.id;
    this.obtenerDatosFormulario();

    this.personalMedService.editarDatos(this.personalMed).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");});
    this.abrirMenu.emit();
  }
}
