import { Component, OnInit } from '@angular/core';
import { CambiarcolorService } from 'src/app/utility/services/cambiarcolor.service';

@Component({
  selector: 'app-pipecolor',
  templateUrl: './pipecolor.component.html',
  styleUrls: ['./pipecolor.component.css']
})
export class PipecolorComponent implements OnInit {

  constructor(private cambiarcolorService:CambiarcolorService ) { }

  ngOnInit(): void {
  }
  cambiarColor(){
    this.cambiarcolorService.cambiarColor();
  }
  get nombrecolor(){
    return this.cambiarcolorService.colorOscuro;
  }
}
