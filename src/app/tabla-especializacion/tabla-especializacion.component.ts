import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Especializacion } from '../model/Especializacion';
import { EspecializacionService } from '../service/especializacion.service';



@Component({
  selector: 'app-tabla-especializacion',
  templateUrl: './tabla-especializacion.component.html',
  styleUrls: ['./tabla-especializacion.component.css']
})
export class TablaEspecializacionComponent implements OnInit, OnChanges {

  constructor(private especializacionService: EspecializacionService) { }
  
  @Output() enviarMenu = new EventEmitter<number>();
  @Output() abrirMenu= new EventEmitter<any>();

  public displayResponsive: boolean | undefined;

  public especializacion: Especializacion[] = Array<Especializacion>();

  public especializacionDelete: Especializacion = new Especializacion();

  ngOnChanges(): void {
    this.obtenerEspecializaciones();
  }

  ngOnInit(): void {
    this.obtenerEspecializaciones();
  }

  obtenerEspecializaciones(){
    this.especializacionService.obtenerEspecializaciones().subscribe(respuesta=>{this.especializacion=respuesta},error=>{console.log("error")});
  }

  enviarEdicion(datos : Especializacion){
    this.enviarMenu.emit(datos.id);
  }

  eliminar(){
    this.displayResponsive=false;
    this.especializacionService.eliminarDatos(this.especializacionDelete.id).subscribe(respuesta=>{this.obtenerEspecializaciones(),console.log(respuesta);},error=>{console.log("error ");});
    this.abrirMenu.emit();
  }

  showResponsiveDialog(especializacion: Especializacion){
    this.displayResponsive=true;
    this.especializacionDelete=especializacion;
  }
}
