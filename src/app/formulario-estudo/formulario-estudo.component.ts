import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-estudo',
  templateUrl: './formulario-estudo.component.html',
  styleUrls: ['./formulario-estudo.component.css']
})
export class FormularioEstudoComponent {

  salvar(form: NgForm) {

    console.log(form.value.nome);
    console.log(form.value.email);
    console.log(form.value.profissao);

  }

}
