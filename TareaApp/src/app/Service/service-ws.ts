import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../Entidades/Tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWs {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8003/api/Tarea";

  listarTWS(){
    return this.http.get<Tarea[]>(this.url + "/listar");
  }

  guardarTWS(tarea : Tarea){
    return this.http.post<String>(this.url + "/guardar", tarea);
  }

  editarTWS(tarea : Tarea){
    return this.http.put<String>(this.url + "/editar", tarea);
  }

  buscarTWS(tarea : Tarea){
    return this.http.post<Tarea>(this.url + "/buscar", tarea);
  }

  eliminarTWS(tarea : Tarea) : Observable<void>{
    return this.http.delete<void>(this.url + "/eliminar", {body : tarea});
  }
}
