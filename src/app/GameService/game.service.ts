import { Injectable } from '@angular/core';
import { Player } from '../Player';
import { Board } from '../Board';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  player1 = new Player('X');
  player2 = new Player('O');
  board = new Board();
  chanceCounter = 0;
  isGameOver = false;
  activePlayer = this.player1;
  constructor() {}

  public get gameOver(): boolean {
    return this.chanceCounter > 8 ||
      this.player1.getWinner ||
      this.player2.getWinner
      ? true
      : false;
  }

  nextPlayerTurn(squarDetails: { id: number; status: string }): void {
    if (!this.gameOver) {
      this.updateBoard(squarDetails);
      if (!this.isGameOver) {
        this.activePlayer =
          this.activePlayer === this.player1 ? this.player2 : this.player1;
        this.chanceCounter++;
      }else{
        this.isGameOver=true;
      }
    }
  }

  updateBoard(squarDetails: { id: number; status: string }): void {
    this.board.setStatus(squarDetails.id, squarDetails.status);
    if (this.isWinner) {
      this.activePlayer.setWinner = true;
      this.isGameOver = true;
    } else {
      this.isGameOver = false;
    }
  }

  get isWinner(): boolean {
    if (this.checkStatus('row') || this.checkStatus('col') || this.checkDiagonally() ) {
      return true;
    } else {
      return false;
    }
  }

  checkDiagonally(): boolean{
    const board = this.board.getBoard;
    const ldFirstSquare = board[0];
    const ldSecondSquare = board[4];
    const ldThirdSquare = board[8];

    const rdFirstSquare = board[2];
    const rdSecondSquare = board[4];
    const rdThirdSquare = board[6];

    if( (ldFirstSquare.status && ldSecondSquare.status && ldThirdSquare.status ) ||
        ( rdFirstSquare.status && rdSecondSquare.status && rdThirdSquare.status)){
          if(ldFirstSquare.status === ldSecondSquare.status && ldSecondSquare.status === ldThirdSquare.status){
            ldFirstSquare.color ='green';
            ldSecondSquare.color ='green';
            ldThirdSquare.color ='green';
            return true
          }else if(rdFirstSquare.status === rdSecondSquare.status && rdSecondSquare.status === rdThirdSquare.status){
            rdFirstSquare.color ='green';
            rdSecondSquare.color ='green';
            rdThirdSquare.color ='green';
            return true
       }
      }
    return false;
  }

  checkStatus(mode: string): boolean {
    const isROw = mode === 'row' ? true : false;
    const distance = isROw ? 1 : 3;
    const incrementBy = isROw ? 3 : 1;
    const loopCondition = isROw ? 7 : 3;
    const board = this.board.getBoard;

    for (let i = 0; i < loopCondition; i += incrementBy) {
      const firstSquare = board[i];
      const secondSquare = board[i + distance];
      const thirdSquare = board[i + (distance * 2)];

      if (firstSquare.status && secondSquare.status && thirdSquare.status) {
          if(firstSquare.status === secondSquare.status && secondSquare.status === thirdSquare.status){
            firstSquare.color ='green';
            secondSquare.color ='green';
            thirdSquare.color ='green';
            return true;
          }
      }
    }

    return false;
  }

  resetGame(): void {
    this.player1 = new Player('X');
    this.player2 = new Player('0');
    this.board = new Board();
    this.chanceCounter = 0;
    this.activePlayer = this.player1;
    this.isGameOver = false;
  }
}
