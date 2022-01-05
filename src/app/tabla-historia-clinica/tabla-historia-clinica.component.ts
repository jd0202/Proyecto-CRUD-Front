import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HistoriaClinica } from '../model/HistoriaClinica';
import { HistoriaClinicaService } from '../service/historia-clinica-service';

@Component({
  selector: 'app-tabla-historia-clinica',
  templateUrl: './tabla-historia-clinica.component.html',
  styleUrls: ['./tabla-historia-clinica.component.css']
})
export class TablaHistoriaClinicaComponent implements OnInit {

  constructor(private historiaCliniService: HistoriaClinicaService) { }

  public historiaClinica : HistoriaClinica[] = new Array<HistoriaClinica>();

  @Output() enviarMenu = new EventEmitter<number>();

  ngOnInit(): void {
    this.obtenerHistoriasClinicas();
  }

  obtenerHistoriasClinicas(){
    this.historiaCliniService.obtenerHistoriasClinicas().subscribe(respuesta=>{this.historiaClinica=respuesta},error=>{console.log("error")})
  }

  enviarEdicion(datos : HistoriaClinica){
    this.enviarMenu.emit(datos.id);
  }
}
