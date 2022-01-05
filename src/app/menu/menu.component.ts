import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public menuVars: Menu = new Menu();
  public id: number = 0;
  
  ngOnInit(){
  }

  crearEspecializacion(){
      this.menuVars.varsFalse();
      this.menuVars.crearEspecializacion=true;
  }

  listarEspecializacion(){
      this.menuVars.varsFalse();
      this.menuVars.listarEspecializacion=true;
  }

  editarEspecializacion($event: any){
    this.id=parseInt($event);
    this.menuVars.varsFalse();
    this.menuVars.editarEspecializacion=true;
    }

  crearPersonalMed(): void{
      this.menuVars.varsFalse();
      this.menuVars.crearPersonalMed=true;
  }

  listarPersonalMed(){
      this.menuVars.varsFalse();
      this.menuVars.listarPersonalMed=true;
  }

  editarPersonalMed($event: any){
      this.id=parseInt($event);
      this.menuVars.varsFalse();
      this.menuVars.editarPersonalMed=true;
  }

  crearPaciente(){
      this.menuVars.varsFalse();
      this.menuVars.crearPaciente=true;
  }

  editarPaciente($event: any){
    this.id=parseInt($event);
    this.menuVars.varsFalse();
    this.menuVars.editarPaciente=true;
  }

  listarPaciente(){
      this.menuVars.varsFalse();
      this.menuVars.listarPaciente=true;
  }

  crearHistoriaClinica(){
      this.menuVars.varsFalse();
      this.menuVars.crearHistoriaClinica=true;
  }

  listarHistoriaClinica(){
      this.menuVars.varsFalse();
      this.menuVars.listarHistoriaClinica=true;
  }

  editarHistoriaClinica($event: any){
      this.id=parseInt($event);
      this.menuVars.varsFalse();
      this.menuVars.editarHistoriaClinica=true;
  }
}

