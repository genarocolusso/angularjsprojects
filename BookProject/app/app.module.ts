import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BooksComponent }  from './books.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BooksComponent ], //old directives
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
