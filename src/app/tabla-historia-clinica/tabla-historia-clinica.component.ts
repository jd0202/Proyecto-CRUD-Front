import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { HistoriaClinica } from '../model/HistoriaClinica';
import { HistoriaClinicaService } from '../service/historia-clinica-service';

@Component({
  selector: 'app-tabla-historia-clinica',
  templateUrl: './tabla-historia-clinica.component.html',
  styleUrls: ['./tabla-historia-clinica.component.css']
})
export class TablaHistoriaClinicaComponent implements OnInit, OnChanges {

  constructor(private historiaClinicaService: HistoriaClinicaService) { }

  public historiaClinica : HistoriaClinica[] = new Array<HistoriaClinica>();

  @Output() enviarMenu = new EventEmitter<number>();
  @Output() abrirMenu= new EventEmitter<any>();

  public historiClinicaDelete : HistoriaClinica = new HistoriaClinica();

  public displayResponsive: boolean | undefined;

  ngOnChanges(): void {
    this.obtenerHistoriasClinicas();
  }

  ngOnInit(): void {
    this.obtenerHistoriasClinicas();
  }

  obtenerHistoriasClinicas(){
    this.historiaClinicaService.obtenerHistoriasClinicas().subscribe(respuesta=>{this.historiaClinica=respuesta},error=>{console.log("error")});
  }

  enviarEdicion(datos : HistoriaClinica){
    this.enviarMenu.emit(datos.id);
  }

  eliminar(){
    this.displayResponsive=false;
    this.historiaClinicaService.eliminarDatos(this.historiClinicaDelete.id).subscribe(respuesta=>{this.obtenerHistoriasClinicas(),console.log(respuesta);},error=>{console.log("error ");});
    this.abrirMenu.emit();
  }

  showResponsiveDialog(historia: HistoriaClinica){
    this.displayResponsive=true;
    this.historiClinicaDelete=historia;
  }
}
