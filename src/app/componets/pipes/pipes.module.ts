import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAngularComponent } from './pipes-angular/pipes-angular.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosComponent } from './numeros/numeros.component';



@NgModule({
  declarations: [
    PipesAngularComponent,
    TextoComponent,
    NumerosComponent
  ],

  imports: [
    CommonModule
  ],
  exports:[PipesAngularComponent]
})
export class PipesModule { }
