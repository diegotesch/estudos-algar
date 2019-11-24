import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FuncionarioService } from './funcionario.service';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  constructor(private funcionarioService: FuncionarioService) {  }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome)
  }
  // nome = "";
  // lastId = 0;
  // show = false;
  // @Output() funcionarioAdicionado = new EventEmitter();

  // adicionar() {
  //   const funcionario = {
  //     id: ++this.lastId,
  //     nome: this.nome
  //   };

  //   this.funcionarioAdicionado.emit(funcionario);

  //   this.showAlert();
  // }

  // showAlert(){
  //  this.trocaStatus();
  //   setTimeout(() => {
  //     this.trocaStatus();
  //   }
  //     , 2000);
  // }

  // trocaStatus(){
  //   this.show = !this.show
  // }

  // limpaCampo(){
  //   this.nome ="";
  // }

}
