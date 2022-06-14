import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private _URL = environment.url  + "produto";

  constructor(private http: HttpClient) { }

  salvar(produto: Produto) {
    return this.http.post<Produto>(this._URL, produto);
  }

  buscarTodos() {
    return this.http.get<Produto[]>(this._URL);
  }

  remover(id: number) {
    return this.http.delete(`${this._URL}/${id}`);
  }
}
