import { Component, OnInit } from '@angular/core';
import { Gioco } from 'src/app/models/gioco.interface';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrls: ['./lista-giochi.component.scss']
})
export class ListaGiochiComponent implements OnInit {

  listaGiochi: Array<Gioco> = [
    {
      id: 1, nome: 'COD', dataRilascio: new Date(2007, 4), genere: 'Sparatutto', immagine: 'cod'
    },
    {
      id: 2, nome: 'WWZ', dataRilascio: new Date(2019, 4), genere: 'Sparatutto', immagine: 'wwz'
    },
    {
      id: 3, nome: 'Fifa 20', dataRilascio: new Date(2019, 10), genere: 'Sparatutto', immagine: 'fifa20'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
