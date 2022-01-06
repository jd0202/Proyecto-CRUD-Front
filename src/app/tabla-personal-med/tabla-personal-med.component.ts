import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { PersonalMed } from '../model/PersonalMed';
import { PersonalMedService } from '../service/personal-med-service.service';

@Component({
  selector: 'app-tabla-personal-med',
  templateUrl: './tabla-personal-med.component.html',
  styleUrls: ['./tabla-personal-med.component.css']
})
export class TablaPersonalMedComponent implements OnInit, OnChanges {

  constructor(private personalMedService: PersonalMedService) { }

  @Output() enviarMenu = new EventEmitter<number>();
  @Output() abrirMenu= new EventEmitter<any>();

  public personalMed: PersonalMed[] = Array<PersonalMed>();

  public displayResponsive: boolean | undefined;

  public personalMedDelete: PersonalMed = new PersonalMed();

  ngOnChanges(): void {
    this.obtenerPersonalMeds();
  }

  ngOnInit(): void {
    this.obtenerPersonalMeds();
  }

  obtenerPersonalMeds(){
    this.personalMedService.obtenerPersonalMeds().subscribe(respuesta=>{this.personalMed=respuesta},error=>{console.log("error")});
  }

  enviarEdicion(datos : PersonalMed){
    this.enviarMenu.emit( datos.id);
  }

  eliminar(){
    this.displayResponsive=false;
    this.personalMedService.eliminarDatos(this.personalMedDelete.id).subscribe(respuesta=>{this.obtenerPersonalMeds(),console.log(respuesta);},error=>{console.log("error ");});
    this.abrirMenu.emit();
  }

  showResponsiveDialog(personalMed: PersonalMed){
    this.displayResponsive=true;
    this.personalMedDelete=personalMed;
  }
  
}
