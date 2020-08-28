import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from './page/page.component';
import {HighlightDirective} from './highlight.directive';
import {ModuleBModule} from '../module-b/module-b.module'


@NgModule({
  imports: [
    CommonModule,ModuleBModule
  ],
  exports: [
  PageComponent,HighlightDirective
],
  declarations: [PageComponent,HighlightDirective]
})
export class ModuleAModule { }