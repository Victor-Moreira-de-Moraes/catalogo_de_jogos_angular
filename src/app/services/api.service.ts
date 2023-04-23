import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  cadastrarJogo(catalogo: { titulo: string; descricao: string; data_lancamento: string; generos:string; desenvolvedora: string; }) {
    return this.http.post(`${this.apiUrl}/jogos`, catalogo);
  }

  cadastrarGenero(genero: any) {
    return this.http.post(`${this.apiUrl}/generos`, genero);
  }

  atualizarJogo(id: any, jogo: any) {
    return this.http.put(`${this.apiUrl}/jogos/${id}`, jogo);
  }

  atualizarGenero(id: any, genero: any) {
    return this.http.put(`${this.apiUrl}/generos/${id}`, genero);
  }

  removerJogo(id: any) {
    return this.http.delete(`${this.apiUrl}/jogos/${id}`);
  }

  removerGenero(id: any) {
    return this.http.delete(`${this.apiUrl}/generos/${id}`);
  }

  listarJogos() {
    return this.http.get(`${this.apiUrl}/jogos`);
  }

  listarGeneros() {
    return this.http.get(`${this.apiUrl}/generos`);
  }
}
