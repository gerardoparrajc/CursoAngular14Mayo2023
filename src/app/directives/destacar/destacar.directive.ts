import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective implements OnInit {

  @Input() appDestacar='';

  constructor( private el: ElementRef) { }

  ngOnInit(): void {
    console.log(this.appDestacar);
    const textoOriginal = this.el.nativeElement.textContent;

    const textoCambiado = textoOriginal.replace(this.appDestacar, `<strong style="color: red">${this.appDestacar}</strong>`);
    this.el.nativeElement.innerHTML= textoCambiado;
  }
}
