const gameChart = {
    0: [[0, 1, 2], [0, 3, 6], [0, 4, 8]],
    1: [[1, 4, 7], [1, 0, 2]],
    2: [[2, 5, 8], [2, 4, 6], [2, 1, 0]],
    3: [[3, 4, 5], [3, 0, 6]],
    4: [[4, 1, 7], [4, 6, 2],[4,0,8]],
    5: [[5, 2, 8], [5, 4, 3]],
    6: [[6, 7, 8], [6, 4, 2], [6, 3, 0]],
    7: [[7, 4, 1], [7, 6, 8]],
    8: [[8, 5, 2], [8, 4, 0], [8, 7, 6]]
}

function Winner(props){

    return (
        <div>winner is {props.winner}
            <button onClick={props.onClick}>Replay Game</button>
        
        </div>
    )
}


function reload() {
    window.location.reload(setInterval(() => {

    }, 1000))
}


function ToPlay(props) {

    return (
        <div>
        <p>Next player is {props.toPlay}</p>
        
        </div>
    )
    
}

function Show(props) {
    return (
        <p>{props.stat}</p>
    )
}



function checkXStatus(play_x){

    var new_play_x=play_x.filter(t=>t!='');
    var new_play=new_play_x.map(str=>str*1);
    var last_played = new_play[new_play.length-1];
    var winchart = gameChart[last_played];
    var highest;
    var count_wins = [];
    var count = 0;

    for (let i = 0; i < winchart.length; i++) {
        for (let j = 0; j < winchart[i].length; j++) {
            if (new_play.includes(winchart[i][j])) {
                count += 1;

            }
            else {
                count = 0
            }
            count_wins.push(count)
        }
        
        count = 0
        
    }
    
    highest = count_wins.filter(k => k >= 3)
    if (highest>=3) {
        return (
            <Winner winner="X"  onClick={reload}/>
        )
    }
}



function checkOStatus(play_o) {
    var new_play_o = play_o.filter(t => t != '');
    var new_play = new_play_o.map(str => str * 1);
    var last_played = new_play[new_play.length - 1];
    var winchart = gameChart[last_played];
    console.log(winchart);
    var highest;
    var count_wins = [];
    var count = 0;
    for (let i = 0; i < winchart.length; i++) {
        for (let j = 0; j < winchart[i].length; j++) {
            if (new_play.includes(winchart[i][j])) {
                count += 1;

            }
            else {
                count = 0
            }
            count_wins.push(count)


        }
        count = 0
    }

    console.log(new_play);
    console.log(count_wins);

    highest = count_wins.filter(k => k >= 3)
    if (highest>=3) {
        return (
            <Winner winner="O" onClick={reload}/>
        )
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
            var winner = this.props.winner;
            if (winner) {
                disable=[true,true,true,true,true,true,true,true,true];
            }

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
        this.resetGame=this.resetGame.bind(this);
        
    }

    resetGame(resetVal){
        this.setState({restart:resetVal});
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
            player_x_marks_in_num.push(value);
            

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
            player_o_marks_in_num.push(value);
            this.setState({ show: showMarks, player_o: player_o_marks_in_num, isToPlay: 'x', disable:disables,played:'o'});
        }
    }

    render(){
        var player_x=this.state.player_x;
        var player_o=this.state.player_o;
        var played=this.state.played;
        var isToPlay=this.state.isToPlay;
        var winner=this.state.winner;
        var restart=this.state.restart;
        const numbers=[0,1,2,3,4,5,6,7,8];
        var show=this.state.show;
        var disable=this.state.disable;

        var whoWon;
        var showWinBoard;
        var showBoard;
        if(played=='x'){
            whoWon = checkXStatus(player_x)
        }
        if(played=='o'){
            whoWon = checkOStatus(player_o);
        }
        
        

        return(
                <div>
                    {whoWon}
                    <ToPlay toPlay={isToPlay} />
                    <PlayButton show={show} value={numbers} onclick={this.handleButton} disable={disable} winner={whoWon}/>
                </div>
        )

    }
}

var outPut=document.getElementById('app');
ReactDOM.render(<XOGame/>,outPut);

