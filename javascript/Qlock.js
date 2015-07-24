"use strict";

define(['ClassNames', 'react'], function (ClassNames, React) {

    // react components
    // the Qlock itself
    var QlockBlock = React.createClass({
        refreshClock: function() {
            var qlock = new Qlock(new Date());
            this.setState({time: qlock.getTime(), minAndSec: qlock.getMinAndSec()});
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

class QlockCalculatorTime {
    constructor(date) {

        this.layout = [
            ["E", "S", "M", "I", "S", "T", "E", "F", "Ü", "N", "F"],
            ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"],
            ["N", "A", "C", "H", "V", "I", "E", "R", "T", "E", "L"],
            ["V", "O", "R", "N", "A", "C", "H", "H", "A", "L", "B"],
            ["E", "I", "N", "S", "I", "N", "K", "Z", "W", "E", "I"],
            ["D", "R", "E", "I", "E", "A", "N", "V", "I", "E", "R"],
            ["F", "Ü", "N", "F", "N", "I", "S", "E", "C", "H", "S"],
            ["S", "I", "E", "B", "E", "N", "I", "A", "C", "H", "T"],
            ["N", "E", "U", "N", "Z", "E", "H", "N", "E", "L", "F"],
            ["Z", "W", "Ö", "L", "F", "K", "A", "B", "U", "H", "R"]
        ];

        this.staticMap = [[0, 0], [0, 1], [0, 3], [0, 4], [0, 5]];

        this.minutesMap = [
            {
                match: [5, 6, 7, 8, 9],
                active: [[0, 7], [0, 8], [0, 9], [0, 10]]
            },
        ]
    }

    isActiveMinute(x, y) {
        return false;
    }

    isActiveHour(x, y) {
        return false;
    }

    isActiveStatic(x, y) {
        var returnValue = false;

        this.staticMap.forEach(function(elem) {
            if(elem[0] == x && elem[1] == y) {
                returnValue = true;
                return;
            }
        });

        return returnValue;
    }

    isActive(x, y) {
        return this.isActiveStatic(x, y) || this.isActiveMinute(x, y) || this.isActiveHour(x, y); // check against static map
    }

    get() {
        return this.layout.map(
            function(row, rowIndex) {
                return row.map(function(char, columIndex) {
                    return QlockCellDecorator.decorate(char, this.isActive(rowIndex, columIndex));
                }.bind(this));
            }.bind(this)
        );
    }
}


class Qlock {
    constructor(date) {
        this.minutesCalculator = new QlockCalculatorMinutes(date);
        this.secondsCalculator = new QlockCalculatorSeconds(date);
        this.timeCalculator = new QlockCalculatorTime(date);

    }

    getTime() {
        return this.timeCalculator.get();
    }

    getMinAndSec() {
        return this.minutesCalculator.get().concat(this.secondsCalculator.get());

    }
}


