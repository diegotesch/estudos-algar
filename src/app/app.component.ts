import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "";
  lastId = 0;
  funcionarios = [];
  show = false;

  adicionar() {
    this.funcionarios.push({
      id: ++this.lastId,
      nome: this.nome
    });
    this.showAlert();
  }

  showAlert(){
   this.trocaStatus();
    setTimeout(() => {
      this.trocaStatus();
    }
      , 2000);
  }

  trocaStatus(){
    this.show = !this.show
  }

  limpaCampo(){
    this.nome ="";
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
