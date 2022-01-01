import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/Paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }

  public paciente: Paciente[] = new Array<Paciente>();

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacienteService.obtenerPacientes().subscribe(respuesta=>{this.paciente=respuesta},error=>{console.log("error")})
  }

}
