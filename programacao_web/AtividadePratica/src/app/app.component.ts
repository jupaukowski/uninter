import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade Pratica';
  data: Array<any>;

  constructor(){
    this.data = [
      { name: 'Juliana Paukowski', ru: 3434447, course: 'Ciência de Dados' , birth_date:'20/05/1986'},
      { name: 'Terry Pratchett', ru: 3467239, course: 'Literatura Inglesa' , birth_date:'28/04/1948'},
      { name: 'Ada Lovelace', ru: 7855453, course: 'Ciência da Computação' , birth_date:'10/12/1815'},
      { name: 'Fiodor Dostoievsky', ru: 1115673, course: 'Literatura Russa' , birth_date:'11/11/1821'},
      { name: 'Emilie du Chatelet', ru: 3096476, course: 'Bacharelado em Física' , birth_date:'17/12/1706'},
    ];
  }
}
