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

  crearPersonalMed(){
      this.menuVars.varsFalse();
      this.menuVars.crearPersonalMed=true;
  }

  listarPersonalMed(){
      this.menuVars.varsFalse();
      this.menuVars.listarPersonalMed=true;
  }

  crearPaciente(){
      this.menuVars.varsFalse();
      this.menuVars.crearPaciente=true;
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
}

