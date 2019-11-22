import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Diego";

  adicionar(nome: string) {
    this.nome = nome;
  }

  // adicionar() {

  //   const numero = Math.round(Math.random() * 100);
  //   this.nome = 'Diego '+numero;
  // }

  // alterarNome(event: any){
  //   // console.log(event.target.value);
  //   this.nome = event.target.value
  // }

}
