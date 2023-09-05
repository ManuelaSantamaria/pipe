import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAngularComponent } from './pipes-angular/pipes-angular.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosComponent } from './numeros/numeros.component';
import { DateComponent } from './date/date.component';
import { JsComponent } from './js/js.component';
import { KeyvalueComponent } from './keyvalue/keyvalue.component';
import { SliceComponent } from './slice/slice.component';
import { I18nselectComponent } from './i18nselect/i18nselect.component';
import { FormsModule } from '@angular/forms';
import { I18npluralComponent } from './i18nplural/i18nplural.component';
import { AsyncComponent } from './async/async.component';
import { PipecolorComponent } from './pipecolor/pipecolor.component';



@NgModule({
  declarations: [
    PipesAngularComponent,
    TextoComponent,
    NumerosComponent,
    DateComponent,
    JsComponent,
    KeyvalueComponent,
    SliceComponent,
    I18nselectComponent,
    I18npluralComponent,
    AsyncComponent,
    PipecolorComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[PipesAngularComponent]
})
export class PipesModule { }
