import { Component } from '@angular/core';
import { Students } from './students-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade Pratica';
  data = Students;
}
