const gameChart={
    1:[1,2,3,4,7,5,9],
    2:[2,5,8,1,3],
    3:[3,6,9,5,7,2,1],
    4:[4,5,6,1,7],
    5:[5,2,8,1,9],
    6:[6,3,9,5,4],
    7:[7,8,9,5,3,4,1],
    8:[8,5,2,7,9],
    9:[9,6,3,5,1,8,7]
}

function StatusForWinner(props){
    if(props.winner==''){
        return null
    }
    else{
        return (
            <div>
                <p>Winner is {props.winner}</p>
                <button onClick={this.restartGame}>Restart Game</button>
            </div>
        )
    }
}

class XOGame extends React.component{

    constructor(props){
        super(props);

        this.state={
            player_x:[],
            player_o:[],
            isToPlay:'x',
            winner:'',
            played:'',
            restart:1
        }

        this.restartGame=this.restartGame.bind(this);
    }

    restartGame(){
        this.setState({restart:1,winner:''});
    }

    render(){
        var player_x=this.state.player_x;
        var player_o=this.state.player_o;
        var played=this.state.played;
        var lastPlayed_x=player_x[player_x.length-1];
        var lastPlayed_o=player_o[player_o.length-1];
        var isToPlay=this.state.isToPlay;
        var winner=this.state.winner;
        var restart=this.state.restart;

        //function for who won
        var whoWon=played=='x'?checkXStatus(lastPlayed_x,player_x):checkOStatus(lastPlayed_o,player_o);
        if(whoWon!==false){
            this.setState({ winner: whoWon, restart: 0 });

        }
        
        let gamestate;

        if (restart == 0) {
            gamestate = <StatusForWinner winner={winner} />

        }
        else{
            gamestate = (<fragment>
                                    <ToPlay isToPlay={isToPlay} />
                                    <PlayButton forValues={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
                        </fragment>)
        }
        
        return(
                <fragment>
                    {gamestate}
                </fragment>
        )

    }

}

