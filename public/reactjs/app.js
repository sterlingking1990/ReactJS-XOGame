'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gameChart = {
    0: [[0, 1, 2], [0, 3, 6], [0, 4, 8]],
    1: [[1, 4, 7], [1, 0, 2]],
    2: [[2, 5, 8], [2, 4, 6], [2, 1, 0]],
    3: [[3, 4, 5], [3, 0, 6]],
    4: [[4, 1, 7], [4, 6, 2], [4, 0, 8]],
    5: [[5, 2, 8], [5, 4, 3]],
    6: [[6, 7, 8], [6, 4, 2], [6, 3, 0]],
    7: [[7, 4, 1], [7, 6, 8]],
    8: [[8, 5, 2], [8, 4, 0], [8, 7, 6]]
};

function Winner(props) {

    return React.createElement(
        'div',
        null,
        'winner is ',
        props.winner,
        React.createElement(
            'button',
            { onClick: props.onClick },
            'Replay Game'
        )
    );
}

function reload() {
    window.location.reload(setInterval(function () {}, 1000));
}

function ToPlay(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Next player is ',
            props.toPlay
        )
    );
}

function Show(props) {
    return React.createElement(
        'p',
        null,
        props.stat
    );
}

function checkXStatus(play_x) {

    var new_play_x = play_x.filter(function (t) {
        return t != '';
    });
    var new_play = new_play_x.map(function (str) {
        return str * 1;
    });
    var last_played = new_play[new_play.length - 1];
    var winchart = gameChart[last_played];
    var highest;
    var count_wins = [];
    var count = 0;

    for (var i = 0; i < winchart.length; i++) {
        for (var j = 0; j < winchart[i].length; j++) {
            if (new_play.includes(winchart[i][j])) {
                count += 1;
            } else {
                count = 0;
            }
            count_wins.push(count);
        }

        count = 0;
    }

    highest = count_wins.filter(function (k) {
        return k >= 3;
    });
    if (highest >= 3) {
        return React.createElement(Winner, { winner: 'X', onClick: reload });
    }
}

function checkOStatus(play_o) {
    var new_play_o = play_o.filter(function (t) {
        return t != '';
    });
    var new_play = new_play_o.map(function (str) {
        return str * 1;
    });
    var last_played = new_play[new_play.length - 1];
    var winchart = gameChart[last_played];
    console.log(winchart);
    var highest;
    var count_wins = [];
    var count = 0;
    for (var i = 0; i < winchart.length; i++) {
        for (var j = 0; j < winchart[i].length; j++) {
            if (new_play.includes(winchart[i][j])) {
                count += 1;
            } else {
                count = 0;
            }
            count_wins.push(count);
        }
        count = 0;
    }

    console.log(new_play);
    console.log(count_wins);

    highest = count_wins.filter(function (k) {
        return k >= 3;
    });
    if (highest >= 3) {
        return React.createElement(Winner, { winner: 'O', onClick: reload });
    }
}

var SelectPlayer = function (_React$Component) {
    _inherits(SelectPlayer, _React$Component);

    function SelectPlayer(props) {
        _classCallCheck(this, SelectPlayer);

        var _this = _possibleConstructorReturn(this, (SelectPlayer.__proto__ || Object.getPrototypeOf(SelectPlayer)).call(this, props));

        _this.changePlayer = _this.changePlayer.bind(_this);
        return _this;
    }

    _createClass(SelectPlayer, [{
        key: 'changePlayer',
        value: function changePlayer(event) {
            this.props.onChange(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var firstPlayer = this.props.firstPlayer;
            var disable_select = this.props.disable_select;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Select First Player'
                ),
                React.createElement(
                    'select',
                    { value: firstPlayer, onChange: this.changePlayer, disabled: disable_select },
                    React.createElement(
                        'option',
                        { value: 'x' },
                        'X'
                    ),
                    React.createElement(
                        'option',
                        { value: 'o' },
                        'O'
                    )
                )
            );
        }
    }]);

    return SelectPlayer;
}(React.Component);

var PlayButton = function (_React$Component2) {
    _inherits(PlayButton, _React$Component2);

    function PlayButton(props) {
        _classCallCheck(this, PlayButton);

        var _this2 = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, props));

        _this2.handlePlay = _this2.handlePlay.bind(_this2);
        return _this2;
    }

    _createClass(PlayButton, [{
        key: 'handlePlay',
        value: function handlePlay(event) {
            this.props.onclick(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var showmarks = this.props.show;
            var val = this.props.value;
            var disable = this.props.disable;
            var winner = this.props.winner;
            if (winner) {
                disable = [true, true, true, true, true, true, true, true, true];
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { value: val[0], onClick: this.handlePlay, disabled: disable[0] },
                    showmarks[0]
                ),
                React.createElement(
                    'button',
                    { value: val[1], onClick: this.handlePlay, disabled: disable[1] },
                    showmarks[1]
                ),
                React.createElement(
                    'button',
                    { value: val[2], onClick: this.handlePlay, disabled: disable[2] },
                    showmarks[2]
                ),
                React.createElement(
                    'button',
                    { value: val[3], onClick: this.handlePlay, disabled: disable[3] },
                    showmarks[3]
                ),
                React.createElement(
                    'button',
                    { value: val[4], onClick: this.handlePlay, disabled: disable[4] },
                    showmarks[4]
                ),
                React.createElement(
                    'button',
                    { value: val[5], onClick: this.handlePlay, disabled: disable[5] },
                    showmarks[5]
                ),
                React.createElement(
                    'button',
                    { value: val[6], onClick: this.handlePlay, disabled: disable[6] },
                    showmarks[6]
                ),
                React.createElement(
                    'button',
                    { value: val[7], onClick: this.handlePlay, disabled: disable[7] },
                    showmarks[7]
                ),
                React.createElement(
                    'button',
                    { value: val[8], onClick: this.handlePlay, disabled: disable[8] },
                    showmarks[8]
                )
            );
        }
    }]);

    return PlayButton;
}(React.Component);

var XOGame = function (_React$Component3) {
    _inherits(XOGame, _React$Component3);

    function XOGame(props) {
        _classCallCheck(this, XOGame);

        var _this3 = _possibleConstructorReturn(this, (XOGame.__proto__ || Object.getPrototypeOf(XOGame)).call(this, props));

        _this3.state = {
            player_x: [],
            player_o: [],
            isToPlay: 'x',
            winner: '',
            played: '',
            restart: 1,
            show: [],
            disable_select: false,
            disable: [false, false, false, false, false, false, false, false, false]

        };

        _this3.handleButton = _this3.handleButton.bind(_this3);
        _this3.resetGame = _this3.resetGame.bind(_this3);

        return _this3;
    }

    _createClass(XOGame, [{
        key: 'changeFirstPlayer',
        value: function changeFirstPlayer(value) {
            this.setState({ isToPlay: value });
        }
    }, {
        key: 'resetGame',
        value: function resetGame(resetVal) {
            this.setState({ restart: resetVal });
        }
    }, {
        key: 'handleButton',
        value: function handleButton(value) {
            if (this.state.isToPlay == 'x') {
                var showMarks = [];
                var disables = [];
                var player_x_marks_in_num = [];
                var player_o_marks_in_num = [];
                disables = this.state.disable;
                showMarks = this.state.show;
                player_x_marks_in_num = this.state.player_x;
                showMarks[value] = 'X';
                disables[value] = true;
                player_x_marks_in_num.push(value);

                this.setState({ show: showMarks, player_x: player_x_marks_in_num, isToPlay: 'o', disable: disables, played: 'x', disable_select: true });
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
                this.setState({ show: showMarks, player_o: player_o_marks_in_num, isToPlay: 'x', disable: disables, played: 'o', disable_select: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var player_x = this.state.player_x;
            var player_o = this.state.player_o;
            var played = this.state.played;
            var isToPlay = this.state.isToPlay;
            var winner = this.state.winner;
            var restart = this.state.restart;
            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var show = this.state.show;
            var disable = this.state.disable;
            var disable_select = this.state.disable_select;

            var whoWon;
            var showWinBoard;
            var showBoard;
            if (played == 'x') {
                whoWon = checkXStatus(player_x);
            }
            if (played == 'o') {
                whoWon = checkOStatus(player_o);
            }

            return React.createElement(
                'div',
                null,
                whoWon,
                React.createElement(ToPlay, { toPlay: isToPlay }),
                React.createElement(SelectPlayer, { firstPlayer: isToPlay, onChange: this.changeFirstPlayer.bind(this), disable_select: disable_select }),
                React.createElement(PlayButton, { show: show, value: numbers, onclick: this.handleButton, disable: disable, winner: whoWon, disable_select: disable_select })
            );
        }
    }]);

    return XOGame;
}(React.Component);

var outPut = document.getElementById('app');
ReactDOM.render(React.createElement(XOGame, null), outPut);
