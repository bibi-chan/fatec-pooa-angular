import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
@Input() curso;
@Input() usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
