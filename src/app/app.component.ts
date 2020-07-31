import { Component } from '@angular/core';
import { PrevisoesService } from './shared/previsoes.service';
import { Previsao } from './shared/previsao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  previsoes: Previsao[];
  city;
  constructor(public previsoesService: PrevisoesService)
  {
    // this.previsoes = previsoesService.obterPrevisoes();
    // previsoesService.obterPrevisoes().subscribe((previsoes) => {
    //   this.previsoes = previsoes['list'];
    //   console.log(this.previsoes);
    // });
  }

  pesquisarCidade() {
    this.previsoesService.getPrevisaoCidade(this.city).subscribe((response: any) => {
      console.log(response);
      return this.previsoes = response['list'];
    });

  }
}
