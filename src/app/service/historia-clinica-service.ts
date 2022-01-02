import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  constructor(private http :HttpClient) { }

  public guardarDatos(datos : any){
    return this.http.post<any>("http://localhost:8080/historiaClinica/crearHistoriaClinica",datos);
  }

  public obtenerHistoriasClinicas(){
    return this.http.get<any>("http://localhost:8080/historiaClinica/obtenerHistoriasClinicas");
  }
}
