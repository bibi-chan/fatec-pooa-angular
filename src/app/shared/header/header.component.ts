import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

fatec = {nome: 'Fatec Ipiranga', logo: '../../../assets/logo-1.png'};

  constructor() { }

  ngOnInit(): void {
  }

}
