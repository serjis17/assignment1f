import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ModuleAModule} from './module-a/module-a.module';
//import {HighlightDirective} from './module-a/highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ModuleAModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
