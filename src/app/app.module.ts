import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PipesModule } from './componets/pipes/pipes.module';
import { ColorfondoPipe } from './utility/pipes/colorfondo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorfondoPipe,
    
  ],
  imports: [
    BrowserModule,
  PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
