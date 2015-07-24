"use strict";

define(['ClassNames', 'react'], function (ClassNames, React) {

    // react components
    // the Qlock itself
    var QlockBlock = React.createClass({
        refreshClock: function() {
            var qlock = new Qlock(new Date());
            this.setState({time: time, minAndSec: qlock.getMinAndSec()});
        },
        getInitialState: function() {
            return {time: [], minAndSec:[]};
        },
        componentDidMount: function() {
            this.refreshClock();
            setInterval(this.refreshClock, this.props.refreshIntervall);
        },
        render: function () {
            return (
                <div>
                    {this.state.time.map(function (item, index) {
                        return <QlockRow cells={item} key={index}/>;
                    })}
                    <QlockRow cells={this.state.minAndSec}/>
                </div>
            );
        }
    });

    // row
    var QlockRow = React.createClass({
        render: function () {
            return (
                <div className="row">
                    {this.props.cells.map(function (item, index) {
                        return <QlockCell char={item.char} active={item.active} key={index}/>;
                    })}
                </div>

            );
        }
    });

    // cell
    var QlockCell = React.createClass({
        render: function () {
            return (
                <div
                    className={ClassNames({'qlock-letter': true, 'qlock-active': this.props.active})}>{this.props.char}</div>
            );
        }
    });

    var time = [
        [
            {char: "E", active: true},
            {char: "S", active: true},
            {char: "M", active: false},
            {char: "I", active: true},
            {char: "S", active: true},
            {char: "T", active: true},
            {char: "E", active: false},
            {char: "F", active: true},
            {char: "Ü", active: true},
            {char: "N", active: true},
            {char: "F", active: true}
        ],
        [
            {char: "Z", active: false},
            {char: "E", active: false},
            {char: "H", active: false},
            {char: "N", active: false},
            {char: "Z", active: false},
            {char: "W", active: false},
            {char: "A", active: false},
            {char: "N", active: false},
            {char: "Z", active: false},
            {char: "I", active: false},
            {char: "G", active: false}
        ],
        [
            {char: "N", active: true},
            {char: "A", active: true},
            {char: "C", active: true},
            {char: "H", active: true},
            {char: "V", active: false},
            {char: "I", active: false},
            {char: "E", active: false},
            {char: "R", active: false},
            {char: "T", active: false},
            {char: "E", active: false},
            {char: "L", active: false}
        ],
        [
            {char: "V", active: false},
            {char: "O", active: false},
            {char: "R", active: false},
            {char: "N", active: false},
            {char: "A", active: false},
            {char: "C", active: false},
            {char: "H", active: false},
            {char: "H", active: false},
            {char: "A", active: false},
            {char: "L", active: false},
            {char: "B", active: false}
        ],
        [
            {char: "E", active: false},
            {char: "I", active: false},
            {char: "N", active: false},
            {char: "S", active: false},
            {char: "I", active: false},
            {char: "N", active: false},
            {char: "K", active: false},
            {char: "Z", active: false},
            {char: "W", active: false},
            {char: "E", active: false},
            {char: "I", active: false}
        ],
        [
            {char: "D", active: false},
            {char: "R", active: false},
            {char: "E", active: false},
            {char: "I", active: false},
            {char: "E", active: false},
            {char: "A", active: false},
            {char: "N", active: false},
            {char: "V", active: false},
            {char: "I", active: false},
            {char: "E", active: false},
            {char: "R", active: false}
        ],
        [
            {char: "F", active: false},
            {char: "Ü", active: false},
            {char: "N", active: false},
            {char: "F", active: false},
            {char: "N", active: false},
            {char: "I", active: false},
            {char: "S", active: false},
            {char: "E", active: false},
            {char: "C", active: false},
            {char: "H", active: false},
            {char: "S", active: false}
        ],
        [
            {char: "S", active: false},
            {char: "I", active: false},
            {char: "E", active: false},
            {char: "B", active: false},
            {char: "E", active: false},
            {char: "N", active: false},
            {char: "I", active: false},
            {char: "A", active: false},
            {char: "C", active: false},
            {char: "H", active: false},
            {char: "T", active: false}
        ],
        [
            {char: "N", active: false},
            {char: "E", active: false},
            {char: "U", active: false},
            {char: "N", active: false},
            {char: "Z", active: false},
            {char: "E", active: false},
            {char: "H", active: false},
            {char: "N", active: false},
            {char: "E", active: false},
            {char: "L", active: false},
            {char: "F", active: false}
        ],
        [
            {char: "Z", active: true},
            {char: "W", active: true},
            {char: "Ö", active: true},
            {char: "L", active: true},
            {char: "F", active: true},
            {char: "K", active: false},
            {char: "A", active: false},
            {char: "B", active: false},
            {char: "U", active: false},
            {char: "H", active: false},
            {char: "R", active: false}
        ]
    ];

    React.render(
        <QlockBlock refreshIntervall={1000} />,
        document.getElementById('QlockBlock')
    );

});


// Classes
class QlockCellDecorator {
    static decorate(char, active) {
        return { char: char, active: (typeof active == 'undefined' ? false : active) };
    }
}

class AbstractQlockCalculator {
    constructor(dateParam) {
        this.date = dateParam;
    }
}

class QlockCalculatorMinutesAndSeconds  extends AbstractQlockCalculator {
    toBinArray(time) {
        return time.toString(2).split('')
    }

    zeroPad(input, minLength) {
        while(input.length < minLength) {
            input = [0].concat(input);
        }

        return input;
    }

    get(firstChar, time, minLength) {
        return [firstChar].concat(this.zeroPad(this.toBinArray(time), minLength)).map(
            function(elem) { return QlockCellDecorator.decorate(elem) }
        );
    }
}

class QlockCalculatorMinutes extends QlockCalculatorMinutesAndSeconds {
    get() {
        return super.get('M', this.date.getMinutes() % 5, 3); // modulo 5
    };
}

class QlockCalculatorSeconds extends QlockCalculatorMinutesAndSeconds {
    get() {
        return super.get('S', this.date.getSeconds(), 6);
    };
}


class Qlock {
    constructor(date) {
        this.minutesCalculator = new QlockCalculatorMinutes(date);
        this.secondsCalculator = new QlockCalculatorSeconds(date);

    }

    getTime() {

    }

    getMinAndSec() {
        return this.minutesCalculator.get().concat(this.secondsCalculator.get());

    }
}


