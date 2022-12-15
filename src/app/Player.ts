export class Player{

    private playTitle: string;
    private isWinner: boolean;
    private playerId: number;

    constructor(private isActive_: string){
        this.isWinner= false;
        this.playerId = Math.random() * 100; 
        this.playTitle = isActive_;
    }

    
    public set setWinner(v : boolean) {
        this.isWinner = v;
    }
    
    
    public get getWinner() : boolean {
        return this.isWinner;
    }

    
    public get getPlayerTitle() : string {
        return this.playTitle;
    }
    
    
}