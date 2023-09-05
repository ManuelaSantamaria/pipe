import { Component } from '@angular/core';
import {CambiarcolorService} from './utility/services/cambiarcolor.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';

  constructor(private cambiarcolorService:CambiarcolorService){}

  get color(){
    return this.cambiarcolorService.colorOscuro;
  }
  
}
