import { newArray } from '@angular/compiler/src/util';
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

  public first = 0;

  public rows = 10;

  ngOnInit(): void {
    this.obtenerEspecializacion();
  }

  obtenerEspecializacion(){
    this.especializacionService.obtenerEspecializacion().subscribe(respuesta=>{this.especializacion=respuesta},error=>{console.log("error")})
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.especializacion ? this.first === (this.especializacion.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.especializacion ? this.first === 0 : true;
}

}
