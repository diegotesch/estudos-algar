import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "";
  funcionarios = [];
  show = false;

  adicionar(nome: string) {
    this.funcionarios.push(nome);
    this.nome = nome;
    this.show = true;
    this.showAlert();
  }

  showAlert(){
    setTimeout(() => {
      this.show = false;
      this.nome = "";
    }
      , 2000);
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
