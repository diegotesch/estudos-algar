import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from './funcionario-form/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }

  // aoAdicionar(funcionario){
  //   this.funcionarios.push(funcionario);
  // }
  
}
