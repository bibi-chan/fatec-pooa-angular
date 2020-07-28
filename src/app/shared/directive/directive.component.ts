import { Component, OnInit, Input } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  cursos = [
    { nome: 'ANÁLISE DE DESENVOLVIMENTO DE SISTEMAS', turno: 'noturno'},
    { nome: 'EVENTOS', turno: 'diurno'},
    { nome: 'GESTÃO COMERCIAL', turno: 'noturno'},
    { nome: 'RECURSOS HUMANOS', turno: 'diurno'},
    { nome: 'GESTÃO EMPRESARIAL', turno: 'noturno'},
    { nome: 'POOA', turno: 'diurno'},
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
