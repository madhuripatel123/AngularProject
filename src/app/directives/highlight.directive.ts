import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
   
   }
@HostBinding("style.backgroundColor")
bgColor="red"
@HostListener("mouseenter")
changeFontsize(){
  console.log("mouse enter")
  this.el.nativeElement.style.fontSize="50px";
}
@HostListener("mouseleave")
changefontsize(){
  console.log("mouse leaving")
  this.el.nativeElement.style.fontSize="30px";
}
}
