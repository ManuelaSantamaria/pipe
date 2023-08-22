import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {
public text:string="eSTo eS un tEXto"
  constructor() { }

  ngOnInit(): void {
  }

}
