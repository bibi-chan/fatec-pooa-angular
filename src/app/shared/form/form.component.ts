import { Curso } from './../curso.model';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  usuario: Usuario = new Usuario();
  cursos;
  usuarios = [{ curso: '', nome: '', idade: ''}];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.listaCursos();
  }

  salvar(form) {
 console.log(this.usuario);
 this.usuario.nome = form.value.nome;
 this.usuario.idade = form.value.idade;
 console.log(this.usuario);
 this.usuarios.push({...this.usuario});
  }


  obterEstilosParaOBotao() {
    return {
      backgroundColor: 'white',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
    };
  }

  obterFundo() {
    return ['fundo'];
  }

}
