import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonalMed } from '../model/PersonalMed';
import { PersonalMedService } from '../service/personal-service.service';

@Component({
  selector: 'app-tabla-personal-med',
  templateUrl: './tabla-personal-med.component.html',
  styleUrls: ['./tabla-personal-med.component.css']
})
export class TablaPersonalMedComponent implements OnInit {

  constructor(private personalMedService: PersonalMedService) { }

  @Output() enviarMenu = new EventEmitter<number>();

  public personalMed: PersonalMed[] = Array<PersonalMed>();

  ngOnInit(): void {
    this.obtenerPersonalMeds();
  }

  obtenerPersonalMeds(){
    this.personalMedService.obtenerPersonalMeds().subscribe(respuesta=>{this.personalMed=respuesta},error=>{console.log("error")});
  }

  enviarEdicion(datos : PersonalMed){
    this.enviarMenu.emit( datos.id);
  }
  
}
