import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  cursosFatecIpiranga = [
  { curso: 'ANÁLISE DE DESENVOLVIMENTO DE SISTEMAS'},
  { curso: 'EVENTOS'},
  { curso: 'GESTÃO COMERCIAL'},
  { curso: 'RECURSOS HUMANOS'},
  { curso: 'GESTÃO EMPRESARIAL'}];

  constructor() { }

  ngOnInit(): void {
  }

}
