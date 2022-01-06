import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../model/Paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit, OnChanges {

  constructor(private pacienteService: PacienteService) { }

  public paciente: Paciente = new Paciente();

  @Input() public guardar: boolean = false;
  @Input() public editar: boolean = false;
  @Input() public id : number = 0;
  @Output() abrirTabla = new EventEmitter<any>();
  
  formPaciente = new FormGroup({
    tipoDocumento: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    nombre1: new FormControl('',Validators.required),
    nombre2: new FormControl(''),
    apellido1: new FormControl('',Validators.required),
    apellido2: new FormControl(''),
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
    sexo: new   FormControl('',Validators.required),
    personalMedId: new FormControl('',Validators.required)
  })

  ngOnChanges(): void {
    if(this.editar){
      this.edit()
    }
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    this.paciente.tipoDocumento=this.formPaciente.get("tipoDocumento")?.value;
    this.paciente.cedula=this.formPaciente.get("cedula")?.value;
    this.paciente.nombre1=this.formPaciente.get("nombre1")?.value;
    this.paciente.nombre2=this.formPaciente.get("nombre2")?.value;
    this.paciente.apellido1=this.formPaciente.get("apellido1")?.value;
    this.paciente.apellido2=this.formPaciente.get("apellido2")?.value;
    this.paciente.telefono=this.formPaciente.get("telefono")?.value;
    this.paciente.email=this.formPaciente.get("email")?.value;
    this.paciente.estadoCivil=this.formPaciente.get("estadoCivil")?.value;
    this.paciente.grupoSanguineo=this.formPaciente.get("grupoSanguineo")?.value;
    this.paciente.fechaNacimiento=this.formPaciente.get("fechaNacimiento")?.value;
    this.paciente.lugarNacimiento=this.formPaciente.get("lugarNacimiento")?.value;
    this.paciente.religion=this.formPaciente.get("religion")?.value;
    this.paciente.etnia=this.formPaciente.get("etnia")?.value;
    this.paciente.tipoPoblacionEspecial=this.formPaciente.get("tipoPoblacion")?.value;
    this.paciente.ocupacion=this.formPaciente.get("ocupacion")?.value;
    this.paciente.identidadGenero=this.formPaciente.get("identidadGenero")?.value;
    this.paciente.sexo=this.formPaciente.get("sexo")?.value;
    this.paciente.personalMedId=this.formPaciente.get("personalMedId")?.value;

    this.pacienteService.guardarDatos(this.paciente).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
    this.abrirTabla.emit();
  }

  edit(): void{

    this.pacienteService.obtenerPacientePorId(this.id).subscribe(respuesta=>{
      this.formPaciente.patchValue({
        tipoDocumento: respuesta.tipoDocumento,
        cedula: respuesta.cedula,
        nombre1: respuesta.nombre1,
        nombre2: respuesta.nombre2,
        apellido1: respuesta.apellido1,
        apellido2: respuesta.apellido2,
        telefono: respuesta.telefono,
        email: respuesta.email,
        estadoCivil: respuesta.estadoCivil,
        grupoSanguineo: respuesta.grupoSanguineo,
        fechaNacimiento: new Date(respuesta.fechaNacimiento),
        lugarNacimiento: respuesta.lugarNacimiento,
        religion: respuesta.religion,
        etnia: respuesta.etnia,
        ocupacion: respuesta.ocupacion,
        identidadGenero: respuesta.identidadGenero,
        sexo: respuesta.sexo,
        personalMedId: respuesta.personalMedId
      });
    },error=>{console.log("error")})
  }

  editarDatos(): void{
    this.paciente.id=this.id
    this.paciente.tipoDocumento=this.formPaciente.get("tipoDocumento")?.value;
    this.paciente.cedula=this.formPaciente.get("cedula")?.value;
    this.paciente.nombre1=this.formPaciente.get("nombre1")?.value;
    this.paciente.nombre2=this.formPaciente.get("nombre2")?.value;
    this.paciente.apellido1=this.formPaciente.get("apellido1")?.value;
    this.paciente.apellido2=this.formPaciente.get("apellido2")?.value;
    this.paciente.telefono=this.formPaciente.get("telefono")?.value;
    this.paciente.email=this.formPaciente.get("email")?.value;
    this.paciente.estadoCivil=this.formPaciente.get("estadoCivil")?.value;
    this.paciente.grupoSanguineo=this.formPaciente.get("grupoSanguineo")?.value;
    this.paciente.fechaNacimiento=this.formPaciente.get("fechaNacimiento")?.value;
    this.paciente.lugarNacimiento=this.formPaciente.get("lugarNacimiento")?.value;
    this.paciente.religion=this.formPaciente.get("religion")?.value;
    this.paciente.etnia=this.formPaciente.get("etnia")?.value;
    this.paciente.tipoPoblacionEspecial=this.formPaciente.get("tipoPoblacion")?.value;
    this.paciente.ocupacion=this.formPaciente.get("ocupacion")?.value;
    this.paciente.identidadGenero=this.formPaciente.get("identidadGenero")?.value;
    this.paciente.sexo=this.formPaciente.get("sexo")?.value;
    this.paciente.personalMedId=this.formPaciente.get("personalMedId")?.value;

    this.pacienteService.editarDatos(this.paciente).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
    this.abrirTabla.emit();
  }

}
