import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercaseletters]'
})

export class UppercaselettersDirective {

  constructor(private el: ElementRef, private rendered: Renderer2) { }

  @HostListener('blur') CapitalizedLetters() {

    /*Se crea un elemento para comparar si se ingresa un dato invalido no cambie las letras 
    mayusculas*/
    const elemento: Array<string> = this.el.nativeElement.className;
    if (elemento.indexOf('is-invalid') >= 0) return;

    /*Se crea una propiedad de tipo string y va a leer el valor del input que lo separa con un
     espacio*/
    let NombreDividido: Array<string> = this.el.nativeElement.value.split(' ');

    /*Se hace un recorrido de las letras que ingresa, imprime la primera letra mayuscula y las 
    demas minusculas*/
    NombreDividido.forEach((valor, index) => {
      NombreDividido[index] = valor.substring(0, 1).toUpperCase() +
        valor.substring(1, valor.length).toLowerCase();
    })

    //render renderiza el valor del input ya con la primera letra cambiada
    this.rendered.setProperty(this.el.nativeElement, 'value', NombreDividido.join(' '));
  }
}