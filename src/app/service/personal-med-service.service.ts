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
    return this.http.get<any>("http://localhost:8080/personalMed/obtenerPersonalMeds");
  }

  public obtenerPersonalMedPorId(id: any){
    return this.http.get<any>("http://localhost:8080/personalMed/obtenerPersonalMedPorId?id="+id);
  }

  public editarDatos(datos: any){
    return this.http.put<any>("http://localhost:8080/personalMed/editarPersonalMed", datos);
  }

  public eliminarDatos(id : any){
    return this.http.delete<any>("http://localhost:8080/personalMed/borrarPersonalMed?id="+id);
  }
}
