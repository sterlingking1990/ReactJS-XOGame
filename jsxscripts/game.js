const gameChart = {
    0: [0, 1, 2, 3, 6, 4, 8],
    1: [1, 4, 7, 0, 2],
    2: [2, 5, 8, 4, 6, 1, 0],
    3: [3, 4, 5, 0, 6],
    4: [4, 1, 7, 0, 8],
    5: [5, 2, 8, 4, 3],
    6: [6, 7, 8, 4, 2, 3, 0],
    7: [7, 4, 1, 6, 8],
    8: [8, 5, 2, 4, 0, 7, 6]
}

class Winner extends React.Component{
    constructor(props){
        super(props);

        this.restartGame=this.restartGame.bind(this);
    }

    restartGame(event){
        this.props.handleRestart(event.target.value);
    }

        render(){
            var restart=this.props.restart;
            var winner=this.props.winner;
            return(
                <div>

                    <p>Winner is {winner}</p>
                    <button value={restart} onClick={this.restartGame}>Restart Game</button>
                </div>
            )

        }
    }

function ToPlay(props) {

    return (
        <p>Next player is {props.toPlay}</p>
    )
    
}


function checkXStatus(last_played_x,play_x){
  

    var num_marks=gameChart[last_played_x];

    var rank=play_x.map(each_num=>num_marks.includes(each_num)).filter(t=>t!==null).length;

    if(rank>=3){
        return "X";
    }
    else{
        return rank;
    }


}

function checkOStatus(last_played_o, play_o) {

    var num_marks = gameChart[last_played_o];

    var rank = play_o.map(each_num => num_marks.includes(each_num)).filter(t => t!==null).length;

    if (rank >= 3) {
        return "O";
    }
    else{
        return rank;
    }


}

class PlayButton extends React.Component{
        constructor(props){
            super(props);
            this.handlePlay=this.handlePlay.bind(this);
        }

        handlePlay(event){
            this.props.onclick(event.target.value);

        }

        render(){
            var showmarks=this.props.show;
            var val=this.props.value;
            var disable=this.props.disable;

            return (
                <div>
                    <button value={val[0]} onClick={this.handlePlay} disabled={disable[0]}>{showmarks[0]}</button>
                    <button value={val[1]} onClick={this.handlePlay} disabled={disable[1]}>{showmarks[1]}</button>
                    <button value={val[2]} onClick={this.handlePlay} disabled={disable[2]}>{showmarks[2]}</button>
                    <button value={val[3]} onClick={this.handlePlay} disabled={disable[3]}>{showmarks[3]}</button>
                    <button value={val[4]} onClick={this.handlePlay} disabled={disable[4]}>{showmarks[4]}</button>
                    <button value={val[5]} onClick={this.handlePlay} disabled={disable[5]}>{showmarks[5]}</button>
                    <button value={val[6]} onClick={this.handlePlay} disabled={disable[6]}>{showmarks[6]}</button>
                    <button value={val[7]} onClick={this.handlePlay} disabled={disable[7]}>{showmarks[7]}</button>
                    <button value={val[8]} onClick={this.handlePlay} disabled={disable[8]}>{showmarks[8]}</button>
                </div>
            )


        }
        
}

class XOGame extends React.Component{

    constructor(props){
        super(props);

        this.state={
            player_x:[],
            player_o:[],
            isToPlay:'x',
            winner:'',
            played:'',
            restart:1,
            show:[],
            disable:[false,false,false,false,false,false,false,false,false]
            
        }

        this.handleButton=this.handleButton.bind(this);
        this.handleGameRestart=this.handleGameRestart.bind(this);
    }

    handleGameRestart(torestart){
        this.setState({restart:torestart});
    }

    handleButton(value){
        if(this.state.isToPlay=='x'){
            var showMarks=[];
            var disables=[];

            var player_x_marks_in_num=[];
            var player_o_marks_in_num=[];
            disables=this.state.disable;
            showMarks=this.state.show;
            player_x_marks_in_num=this.state.player_x;
            showMarks[value]='X';
            disables[value]=true;
            player_x_marks_in_num[value]=value;

            this.setState({show:showMarks,player_x:player_x_marks_in_num,isToPlay:'o',disable:disables,played:'x'});
        }
        if (this.state.isToPlay == 'o') {
            var showMarks = [];
            var disables = [];
            disables = this.state.disable;
            showMarks = this.state.show;
            player_o_marks_in_num = this.state.player_o;
            showMarks[value] = 'O';
            disables[value] = true;
            player_o_marks_in_num[value] = value;
            this.setState({ show: showMarks, player_o: player_o_marks_in_num, isToPlay: 'x', disable:disables,played:'o' });
        }
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
        const numbers=[0,1,2,3,4,5,6,7,8];
        var show=this.state.show;
        var disable=this.state.disable;

        var whoWon;
        var showBoard;
        whoWon=played=="x"?checkXStatus(lastPlayed_x,player_x):checkOStatus(lastPlayed_o,player_o);
        // this.setState({winner:whoWon});
        if(whoWon=='x' || whoWon=='o'){
            showBoard = <Winner win={whoWon} restart={restart} handleRestart={this.handleGameRestart} />
        }
        else{
            if(restart==1){
            showBoard = <div><ToPlay toPlay={isToPlay} />
                <PlayButton show={show} value={numbers} onclick={this.handleButton} disable={disable} /></div>
            }
        }
        
        return(
                <div>
                    {showBoard}
                </div>
            
        )

    }
}

var outPut=document.getElementById('app');
ReactDOM.render(<XOGame/>,outPut);

