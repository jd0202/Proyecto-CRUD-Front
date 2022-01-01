import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  public guardarDatos(datos : any){
    return this.http.post<any>("http://localhost:8080/paciente/crearPaciente",datos);
  }
  
  public obtenerPacientes(){
    return this.http.get<any>("http://localhost:8080/paciente/obtenerPacientes");
  }
}
