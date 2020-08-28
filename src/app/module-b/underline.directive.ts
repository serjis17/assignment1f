import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private el: ElementRef) { }
  @Input('appUnderline') appUnderline: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration="underline";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration="";
  }

}