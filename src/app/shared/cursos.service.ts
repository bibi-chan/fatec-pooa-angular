import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosFatecIpiranga = [
    { curso: 'ANÁLISE DE DESENVOLVIMENTO DE SISTEMAS'},
    { curso: 'EVENTOS'},
    { curso: 'GESTÃO COMERCIAL'},
    { curso: 'RECURSOS HUMANOS'},
    { curso: 'GESTÃO EMPRESARIAL'}
  ];

  constructor() { }

  listaCursos(id = false) {
    if (id === false) {
      return this.cursosFatecIpiranga;
    }
  }
}
