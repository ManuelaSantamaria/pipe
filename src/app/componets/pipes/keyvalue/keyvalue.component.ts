import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css']
})
export class KeyvalueComponent implements OnInit {
  
  public persona={
    nombre:"manuela",
    apellido:"ocampo santamaria",
    edad:20,
    direccion:"marquetalia",
    telefono:3122352349
  }

  constructor() { }

  ngOnInit(): void {
  }

}
