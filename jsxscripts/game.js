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

function ToPlay(props) {

    return (
        <p>Next player is {props.toPlay}</p>
    )
    
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
                <div class="btn-group">
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

            this.setState({show:showMarks,player_x:player_x_marks_in_num,isToPlay:'o',disable:disables});
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
            this.setState({ show: showMarks, player_o: player_o_marks_in_num, isToPlay: 'x', disable:disables });
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
        
        
        return(
                <div>
                    <ToPlay toPlay={isToPlay}/>
                    <PlayButton show={show} value={numbers} onclick={this.handleButton} disable={disable}/>
                </div>
            
        )

    }
}

var outPut=document.getElementById('app');
ReactDOM.render(<XOGame/>,outPut);

