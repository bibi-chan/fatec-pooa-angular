import { Previsao } from './../previsao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.scss']
})
export class PrevisaoComponent implements OnInit {
  @Input() previsao: Previsao;

  constructor() { }

  ngOnInit(): void {
  }

}
