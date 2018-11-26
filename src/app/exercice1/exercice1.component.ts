import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public compteur: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  public result: number = 0;

  constructor() { }

  ngOnInit() {
    this.result = this.compteur;
  }

  // on récupère le résultat de l'opération avec la fonction appelée par l'eventEmitter ope
  updateResult(val: number): void {
    this.result = val;
  }
}
