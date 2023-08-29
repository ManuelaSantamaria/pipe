import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18nplural',
  templateUrl: './i18nplural.component.html',
  styleUrls: ['./i18nplural.component.css']
})
export class I18npluralComponent implements OnInit {

  public contador=0;
  public map={
    '=0': 'no tiene valor',
    '=1': 'el valor es de (#)',
    '=2': 'el valor es mayor a 1 y es de (#)',
    'other': 'el valor supero al 2, es de (#)',
  }
  constructor() { }

  ngOnInit(): void {
  }
  aumentar(){
    this.contador++;
  }

}
