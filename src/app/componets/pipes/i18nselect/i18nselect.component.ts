import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18nselect',
  templateUrl: './i18nselect.component.html',
  styleUrls: ['./i18nselect.component.css']
})
export class I18nselectComponent implements OnInit {
  public genero='m';
  public map={
    m:'bienvenido usuario', 
    f:'bienvenida usuaria', 
    otro:'bienvenid@'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
