export class Board{

    board = Array<{id:number,status:null|string,color: null | string}>();
    constructor(){
        this.createBoard();
    }

    createBoard(): void{
        for( let i = 0; i < 9; i ++ ){
            this.board.push( { id: i, status: null,color: null} )
          };
    }

    
    public get getBoard() : Array<{id:number,status:null|string,color: null | string}> {
        return this.board;
    }
    
    
    public setStatus(id:number,status:string){
        this.board[id].status= status;
    }

}