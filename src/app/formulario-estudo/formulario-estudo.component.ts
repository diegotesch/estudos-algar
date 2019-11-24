import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario-estudo',
  templateUrl: './formulario-estudo.component.html',
  styleUrls: ['./formulario-estudo.component.css']
})
export class FormularioEstudoComponent {

  cliente: Cliente = new Cliente();
  profissaoDefault = 'Outro'
  profissoes = [
    'Programador',
    'Empresário',
    'Engenheiro',
    'Outro'
  ];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    console.log(this.cliente);
  }

}

class Cliente {

  nome: string;
  email: string;
  profissao: string;

}
