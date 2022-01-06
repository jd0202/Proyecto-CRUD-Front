import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../model/Paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }

  @Output() enviarMenu = new EventEmitter<number>();
  @Output() abrirMenu= new EventEmitter<any>();

  public displayResponsive: boolean | undefined;

  public paciente: Paciente[] = new Array<Paciente>();

  public pacienteDelete: Paciente = new Paciente();

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe(respuesta=>{this.paciente=respuesta},error=>{console.log("error")});
  }

  enviarEdicion(datos : Paciente){
    this.enviarMenu.emit(datos.id);
  }

  eliminar(){
    console.log(this.pacienteDelete.id)
    this.displayResponsive=false;
    this.pacienteService.eliminarDatos(this.pacienteDelete.id).subscribe(respuesta=>{this.obtenerPacientes(),console.log(respuesta);},error=>{console.log("error ");});
    this.abrirMenu.emit();
  }

  showResponsiveDialog(paciente: Paciente){
    this.displayResponsive=true;
    this.pacienteDelete=paciente;
  }

}
