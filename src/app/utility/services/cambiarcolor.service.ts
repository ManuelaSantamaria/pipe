import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambiarcolorService {
public colorOscuro = false;
  constructor() { }
  cambiarColor(){

    this.colorOscuro=!this.colorOscuro;
    console.log(this.colorOscuro);
  }
}
