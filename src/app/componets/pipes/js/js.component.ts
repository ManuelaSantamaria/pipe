import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  public persona={
    nombre:"manuela",
    apellido:"ocampo santamaria",
    edad:20,
    direccion:"marquetalia",
    telefono:3122352349,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
