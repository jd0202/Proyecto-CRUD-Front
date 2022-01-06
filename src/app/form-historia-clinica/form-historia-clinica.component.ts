import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HistoriaClinica } from '../model/HistoriaClinica';
import { HistoriaClinicaService } from '../service/historia-clinica-service';

@Component({
  selector: 'app-form-historia-clinica',
  templateUrl: './form-historia-clinica.component.html',
  styleUrls: ['./form-historia-clinica.component.css']
})
export class FormHistoriaClinicaComponent implements OnInit, OnChanges {

  constructor(private historiaClinicaService: HistoriaClinicaService) { }
  
  public historiaClinica: HistoriaClinica = new HistoriaClinica();

  @Input() public guardar: boolean = false;
  @Input() public editar: boolean = false;
  @Input() public id : number = 0;
  @Output() abrirTabla = new EventEmitter<any>();

  formHistoriaClinica = new FormGroup({
    cedula: new FormControl('',Validators.required),
    fechaIngreso: new FormControl('',Validators.required),
    fechaSalida: new FormControl(''),
    tipoConsulta: new FormControl('',Validators.required),
    motivoConsulta: new FormControl('',Validators.required),
    enfermedadActual: new FormControl('',Validators.required),
    antecedentes: new FormControl('',Validators.required),
    revisionDeSistemas: new FormControl('',Validators.required),
    examenFisico: new FormControl('',Validators.required),
    diagnostico: new FormControl('',Validators.required),
    tratamientoMedico: new FormControl('',Validators.required),
    idPaciente: new FormControl('',Validators.required),
    idPersonalMed: new FormControl('',Validators.required),
  })

  ngOnChanges(): void {
    if(this.editar){
      this.edit()
    }
  }

  ngOnInit(): void {
  }

  edit(): void{
    this.historiaClinicaService.obtenerHistoriaClinicaPorId(this.id).subscribe(respuesta=>{
      this.formHistoriaClinica.setValue({
        cedula: respuesta.cedula,
        fechaIngreso: new Date(respuesta.fechaIngreso),
        fechaSalida: new Date(respuesta.fechaSalida),
        tipoConsulta: respuesta.tipoConsulta,
        motivoConsulta: respuesta.motivoConsulta,
        enfermedadActual: respuesta.enfermedadActual,
        antecedentes: respuesta.antecedentes,
        revisionDeSistemas: respuesta.revisionDeSistemas,
        examenFisico: respuesta.examenFisico,
        diagnostico: respuesta.diagnostico,
        tratamientoMedico: respuesta.tratamientoMedico,
        idPaciente: respuesta.idPaciente,
        idPersonalMed: respuesta.idPersonalMed
      });
    },error=>{console.log("error")})
  }

  enviarDatos(): void{
    this.historiaClinica.cedula=this.formHistoriaClinica.get("cedula")?.value;
    this.historiaClinica.fechaIngreso=this.formHistoriaClinica.get("fechaIngreso")?.value;
    this.historiaClinica.fechaSalida=this.formHistoriaClinica.get("fechaSalida")?.value;
    this.historiaClinica.tipoConsulta=this.formHistoriaClinica.get("tipoConsulta")?.value;
    this.historiaClinica.motivoConsulta=this.formHistoriaClinica.get("motivoConsulta")?.value;
    this.historiaClinica.enfermedadActual=this.formHistoriaClinica.get("enfermedadActual")?.value;
    this.historiaClinica.antecedentes=this.formHistoriaClinica.get("antecedentes")?.value;
    this.historiaClinica.revisionDeSistemas=this.formHistoriaClinica.get("revisionDeSistemas")?.value;
    this.historiaClinica.examenFisico=this.formHistoriaClinica.get("examenFisico")?.value;
    this.historiaClinica.diagnostico=this.formHistoriaClinica.get("diagnostico")?.value;
    this.historiaClinica.tratamientoMedico=this.formHistoriaClinica.get("tratamientoMedico")?.value;
    this.historiaClinica.idPaciente=this.formHistoriaClinica.get("idPaciente")?.value;
    this.historiaClinica.idPersonalMed=this.formHistoriaClinica.get("idPersonalMed")?.value;

    this.historiaClinicaService.guardarDatos(this.historiaClinica).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
    this.abrirTabla.emit();
  }

  editarDatos(){
    this.historiaClinica.id=this.id
    this.historiaClinica.cedula=this.formHistoriaClinica.get("cedula")?.value;
    this.historiaClinica.fechaIngreso=this.formHistoriaClinica.get("fechaIngreso")?.value;
    this.historiaClinica.fechaSalida=this.formHistoriaClinica.get("fechaSalida")?.value;
    this.historiaClinica.tipoConsulta=this.formHistoriaClinica.get("tipoConsulta")?.value;
    this.historiaClinica.motivoConsulta=this.formHistoriaClinica.get("motivoConsulta")?.value;
    this.historiaClinica.enfermedadActual=this.formHistoriaClinica.get("enfermedadActual")?.value;
    this.historiaClinica.antecedentes=this.formHistoriaClinica.get("antecedentes")?.value;
    this.historiaClinica.revisionDeSistemas=this.formHistoriaClinica.get("revisionDeSistemas")?.value;
    this.historiaClinica.examenFisico=this.formHistoriaClinica.get("examenFisico")?.value;
    this.historiaClinica.diagnostico=this.formHistoriaClinica.get("diagnostico")?.value;
    this.historiaClinica.tratamientoMedico=this.formHistoriaClinica.get("tratamientoMedico")?.value;
    this.historiaClinica.idPaciente=this.formHistoriaClinica.get("idPaciente")?.value;
    this.historiaClinica.idPersonalMed=this.formHistoriaClinica.get("idPersonalMed")?.value;

    this.historiaClinicaService.editarDatos(this.historiaClinica).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
    this.abrirTabla.emit();
  }

}
