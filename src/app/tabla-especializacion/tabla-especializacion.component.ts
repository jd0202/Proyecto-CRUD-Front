import { Component, OnInit } from '@angular/core';
import { Especializacion } from '../model/Especializacion';
import { EspecializacionService } from '../service/especializacion.service';


@Component({
  selector: 'app-tabla-especializacion',
  templateUrl: './tabla-especializacion.component.html',
  styleUrls: ['./tabla-especializacion.component.css']
})
export class TablaEspecializacionComponent implements OnInit {

  constructor(private especializacionService: EspecializacionService) { }
  
  public especializacion: Especializacion[] = Array<Especializacion>();

  ngOnInit(): void {
    this.obtenerEspecializaciones();
  }

  obtenerEspecializaciones(){
    this.especializacionService.obtenerEspecializaciones().subscribe(respuesta=>{this.especializacion=respuesta},error=>{console.log("error")})
  }

  enviarId(datos : Especializacion){
    console.log(datos.id)
  }
}
