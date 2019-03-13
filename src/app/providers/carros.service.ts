import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importa hhtp client
import { Carro } from '../modelos/carro'; //importa Classe Carro

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http:HttpClient) { }
  lista(){
    return this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
  }
}


