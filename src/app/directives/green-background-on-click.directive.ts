import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGreenBackgroundOnClick]',
})
export class GreenBackgroundOnClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
