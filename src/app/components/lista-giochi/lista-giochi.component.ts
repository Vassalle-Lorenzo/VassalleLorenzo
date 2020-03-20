import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.sass']
})
export class ListaGiochiComponent implements OnInit {

  listaGiochi: Array<string> = ['COD', 'Fifa_20']

  constructor() { }

  ngOnInit() {
  }

}
