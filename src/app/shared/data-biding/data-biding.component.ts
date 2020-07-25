import { CursosService } from './../cursos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso.model';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {
  curso: string;
  cursoModel = new Curso('');
  @Input() cursos;
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.listaCursos();

  }

  adicionar(curso): void {
    console.log(curso);
    this.curso = curso;
    this.cursos.push(this.cursoModel);
    }
}
