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
    this.showAlert();
  }

  showAlert(){
   this.trocaStatus();
    setTimeout(() => {
      this.trocaStatus();
      this.nome = "";
    }
      , 2000);
  }

  trocaStatus(){
    this.show = !this.show;
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
