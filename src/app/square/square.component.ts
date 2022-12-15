import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../GameService/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() square:any;
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
  }

  nextPlayer():void{
    if(this.square.status === null && !this.gameService.gameOver){
      this.square.status = this.gameService.activePlayer.getPlayerTitle;
      this.gameService.nextPlayerTurn(this.square);
    }
  }
}
