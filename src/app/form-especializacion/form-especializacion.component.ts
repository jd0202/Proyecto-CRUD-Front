import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Especializacion } from '../model/Especializacion';
import { EspecializacionService } from '../service/especializacion.service';

@Component({
  selector: 'app-form-especializacion',
  templateUrl: './form-especializacion.component.html',
  styleUrls: ['./form-especializacion.component.css']
})
export class FormEspecializacionComponent implements OnInit {

  constructor(private especializacionService : EspecializacionService) { }

  public especializacion: Especializacion = new Especializacion();

  formEspecializacion = new FormGroup({
    nombre: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  enviarDatos(): void{
    this.especializacion.especializacion=this.formEspecializacion.get("nombre")?.value;

    this.especializacionService.guardarDatos(this.especializacion).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
  }

}
