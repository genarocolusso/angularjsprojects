import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkateListComponent }   from './app.component';
import { InfoComponent } from './info.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                      SkateListComponent,
                      InfoComponent
   ],
  bootstrap:    [ SkateListComponent,
                        InfoComponent ]
})
export class AppModule { }
