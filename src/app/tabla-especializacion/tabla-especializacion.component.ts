import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Especializacion } from '../model/Especializacion';
import { EspecializacionService } from '../service/especializacion.service';


@Component({
  selector: 'app-tabla-especializacion',
  templateUrl: './tabla-especializacion.component.html',
  styleUrls: ['./tabla-especializacion.component.css']
})
export class TablaEspecializacionComponent implements OnInit {

  constructor(private especializacionService: EspecializacionService) { }
  
   @Output() enviarMenu = new EventEmitter<number>();

  public especializacion: Especializacion[] = Array<Especializacion>();

  ngOnInit(): void {
    this.obtenerEspecializaciones();
  }

  obtenerEspecializaciones(){
    this.especializacionService.obtenerEspecializaciones().subscribe(respuesta=>{this.especializacion=respuesta},error=>{console.log("error")})
  }

  enviarEdicion(datos : Especializacion){
    this.enviarMenu.emit(datos.id);
  }
}
