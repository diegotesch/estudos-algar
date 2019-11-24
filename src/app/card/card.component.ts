import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card : any

  getCardStyle() {
    return {
      borderWidth : '2pxx',
      backgroundColor : this.card.id  % 2 ? 'lightblue' : 'lightgreen'
    };
  }

  // getListaClassesCss() {
  //   return ['badge', 'badge-success'];
  // }

  isAdmin() {
    return this.card.nome.startsWith('D');
  }
}
