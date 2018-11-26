import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('saisie') public el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  updateAff() {
    this.valeur = this.el.nativeElement.value;
  }

}
