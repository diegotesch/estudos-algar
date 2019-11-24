import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  funcionarios = [
    {id: 1, nome: 'Tomas Tur Bando'}
  ];
  lastId = 1;

  adicionar(nome:string) {
    const funcionario = {
      id: ++this.lastId,
      nome: nome
    }

    this.funcionarios.push(funcionario)
    console.table(this.funcionarios);
  }

  consultar() {
    return this.funcionarios;
  }

}
