import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from './page/page.component';
import {HighlightDirective} from './highlight.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  PageComponent,HighlightDirective
],
  declarations: [PageComponent,HighlightDirective]
})
export class ModuleAModule { }