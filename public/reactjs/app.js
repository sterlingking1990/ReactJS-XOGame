'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gameChart = {
    1: [1, 2, 3, 4, 7, 5, 9],
    2: [2, 5, 8, 1, 3],
    3: [3, 6, 9, 5, 7, 2, 1],
    4: [4, 5, 6, 1, 7],
    5: [5, 2, 8, 1, 9],
    6: [6, 3, 9, 5, 4],
    7: [7, 8, 9, 5, 3, 4, 1],
    8: [8, 5, 2, 7, 9],
    9: [9, 6, 3, 5, 1, 8, 7]
};

function StatusForWinner(props) {
    if (props.winner == '') {
        return null;
    } else {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Winner is ',
                props.winner
            ),
            React.createElement(
                'button',
                { onClick: this.restartGame },
                'Restart Game'
            )
        );
    }
}

function ToPlay(props) {

    return React.createElement(
        'p',
        null,
        'Next player is ',
        props.toPlay
    );
}

var PlayButton = function (_React$Component) {
    _inherits(PlayButton, _React$Component);

    function PlayButton(props) {
        _classCallCheck(this, PlayButton);

        var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, props));

        _this.handlePlay = _this.handlePlay.bind(_this);
        return _this;
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

            return React.createElement(
                'div',
                { 'class': 'btn-group' },
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

var XOGame = function (_React$Component2) {
    _inherits(XOGame, _React$Component2);

    function XOGame(props) {
        _classCallCheck(this, XOGame);

        var _this2 = _possibleConstructorReturn(this, (XOGame.__proto__ || Object.getPrototypeOf(XOGame)).call(this, props));

        _this2.state = {
            player_x: [],
            player_o: [],
            isToPlay: 'x',
            winner: '',
            played: '',
            restart: 1,
            show: [],
            disable: [false, false, false, false, false, false, false, false, false]

        };

        _this2.handleButton = _this2.handleButton.bind(_this2);
        return _this2;
    }

    _createClass(XOGame, [{
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
                player_x_marks_in_num[value] = value;

                this.setState({ show: showMarks, player_x: player_x_marks_in_num, isToPlay: 'o', disable: disables });
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
                this.setState({ show: showMarks, player_o: player_o_marks_in_num, isToPlay: 'x', disable: disables });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var player_x = this.state.player_x;
            var player_o = this.state.player_o;
            var played = this.state.played;
            var lastPlayed_x = player_x[player_x.length - 1];
            var lastPlayed_o = player_o[player_o.length - 1];
            var isToPlay = this.state.isToPlay;
            var winner = this.state.winner;
            var restart = this.state.restart;
            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var show = this.state.show;
            var disable = this.state.disable;

            return React.createElement(
                'div',
                null,
                React.createElement(ToPlay, { toPlay: isToPlay }),
                React.createElement(PlayButton, { show: show, value: numbers, onclick: this.handleButton, disable: disable })
            );
        }
    }]);

    return XOGame;
}(React.Component);

var outPut = document.getElementById('app');
ReactDOM.render(React.createElement(XOGame, null), outPut);
