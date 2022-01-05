import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Especializacion } from '../model/Especializacion';
import { EspecializacionService } from '../service/especializacion.service';

@Component({
  selector: 'app-form-especializacion',
  templateUrl: './form-especializacion.component.html',
  styleUrls: ['./form-especializacion.component.css']
})
export class FormEspecializacionComponent implements OnInit, OnChanges {

  constructor(private especializacionService : EspecializacionService) { }

  public especializacion: Especializacion = new Especializacion();

  @Input() public guardar: boolean = false;
  @Input() public editar: boolean = false;
  @Input() public id : number = 0;
  
  formEspecializacion = new FormGroup({
    nombre: new FormControl('',Validators.required)
  })

  ngOnChanges(): void {
    if(this.editar){
      this.edit()
    }
  }

  ngOnInit(): void {
    
  }

  enviarDatos(): void{
    this.especializacion.especializacion=this.formEspecializacion.get("nombre")?.value;

    this.especializacionService.guardarDatos(this.especializacion).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
  }

  edit(): void{
    this.especializacionService.obtenerEspecializacionPorId(this.id).subscribe(respuesta=>{
      this.formEspecializacion.setValue({
        nombre : respuesta.especializacion
      });
    },error=>{console.log("error")})
  }

  editarDatos(): void{
    this.especializacion.id=this.id
    this.especializacion.especializacion=this.formEspecializacion.get("nombre")?.value;

    this.especializacionService.editarDatos(this.especializacion).subscribe(respuesta=>{console.log(respuesta);},error=>{console.log("error");})
  }
}
