import { Component } from '@angular/core';
import { GameService } from './GameService/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  constructor(public gameService: GameService){
  }
}
