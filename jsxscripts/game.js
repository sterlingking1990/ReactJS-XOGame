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

class XOGame extends React.component{

    constructor(props){
        super(props);

        this.state={
            player_x:[],
            player_o:[],
            isToPlay:'x',
            winner:'',
            played:''
        }
    }

    render(){
        
    }

}

