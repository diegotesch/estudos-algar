import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  nome = 'Diego Tesch'
  dataAniversario = new Date(1988, 1, 10);
  preco = 12855.32
  troco = 0.57392

}
