import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGatoBotas]'
})
export class GatoBotasDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const textoOriginal: string = this.el.nativeElement.textContent;

    if (textoOriginal.trim() === '') return;

    const textoCambiado: string = textoOriginal.replace(/s|S/g, (letra) => {
      return letra === 's' ? 'z' : 'Z';
    });

    this.el.nativeElement.textContent = textoCambiado;
  }

}
