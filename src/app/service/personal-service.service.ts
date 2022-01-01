import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalMedService {

  constructor(private http: HttpClient) { }

  public guardarDatos(datos: any){
    return this.http.post<any>("http://localhost:8080/personalMed/crearPersonalMed",datos);
  }

  public obtenerPersonalMeds(){
    //punto de partida:implementar funcion obtener todos los personalmed en el back
    return this.http.get<any>("http://localhost:8080/personalMed/obtenerPersonalMeds");
  }
}
