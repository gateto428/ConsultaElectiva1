import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServiceConsultService {

  constructor(public http: HttpClient) { }

  getData(){
    return this.http.get("./assets/consulta_anticorrupcion_municipios.json");
  }
}
