import { Component, OnInit } from '@angular/core';
//import{UnderlineDirective} from '../module-b/underline.directive';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color:string="red";

}