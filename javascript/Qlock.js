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

class QlockDE {
    constructor(date) {
        this.layout = [
            //0    1    2    3    4    5    6    7    8    9    10
            ["E", "S", "M", "I", "S", "T", "E", "F", "Ü", "N", "F"], // 0
            ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"], // 1
            ["N", "A", "C", "H", "V", "I", "E", "R", "T", "E", "L"], // 2
            ["V", "O", "R", "N", "A", "C", "H", "H", "A", "L", "B"], // 3
            ["E", "I", "N", "S", "I", "N", "K", "Z", "W", "E", "I"], // 4
            ["D", "R", "E", "I", "E", "A", "N", "V", "I", "E", "R"], // 5
            ["F", "Ü", "N", "F", "N", "I", "S", "E", "C", "H", "S"], // 6
            ["S", "I", "E", "B", "E", "N", "I", "A", "C", "H", "T"], // 7
            ["N", "E", "U", "N", "Z", "E", "H", "N", "E", "L", "F"], // 8
            ["Z", "W", "Ö", "L", "F", "K", "A", "B", "U", "H", "R"]  // 9
        ];

        // allways on
        this.staticMap = [[0, 0], [0, 1], [0, 3], [0, 4], [0, 5]];

        // minutes
        // helper map for words
        var minuteWordMap = {
            "five": [[0, 7], [0, 8], [0, 9], [0, 10]],
            "ten": [[1, 0], [1, 1], [1, 2], [1, 3]],
            "twenty": [[1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10]],
            "quarter": [[2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10]],
            "half": [[3, 7], [3, 8], [3, 9], [3, 10]],
            "after": [[2, 0], [2, 1], [2, 2], [2, 3]],
            "before": [[3, 0], [3, 1], [3, 2]],
            "afterQuarter": [[3, 3], [3, 4], [3, 5], [3, 6]]
        };

        this.minutesMap = [
            {
                bounds: { low: 5, high: 9 },
                active: minuteWordMap.five.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 10, high: 14 },
                active: minuteWordMap.ten.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 15, high: 19 },
                active: minuteWordMap.quarter.concat(minuteWordMap.afterQuarter)
            },
            {
                bounds: { low: 20, high: 24 },
                active: minuteWordMap.twenty.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 25, high: 29 },
                active: minuteWordMap.five.concat(minuteWordMap.before, minuteWordMap.half)
            },
            {
                bounds: { low: 30, high: 34 },
                active: minuteWordMap.half
            },
            {
                bounds: { low: 35, high: 39 },
                active: minuteWordMap.five.concat(minuteWordMap.after, minuteWordMap.half)
            },
            {
                bounds: { low: 40, high: 44 },
                active: minuteWordMap.twenty.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 45, high: 49 },
                active: minuteWordMap.quarter.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 50, high: 54 },
                active: minuteWordMap.ten.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 55, high: 59 },
                active: minuteWordMap.five.concat(minuteWordMap.before)
            }
        ]

        this.hourMap = {
            0: [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4]],
            1: [[4, 0], [4, 1], [4, 2]],
            2: [[4, 7], [4, 8], [4, 9], [4, 10]],
            3: [[5, 0], [5, 1], [5, 2], [5, 3]],
            4: [[5, 7], [5, 8], [5, 9], [5, 10]],
            5: [[6, 0], [6, 1], [6, 2], [6, 3]],
            6: [[6, 6], [6, 7], [6, 8], [6, 9], [6, 10]],
            7: [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5]],
            8: [[7, 7], [7, 8], [7, 9], [7, 10]],
            9: [[8, 0], [8, 1], [8, 2], [8, 3]],
            10: [[8, 4], [8, 5], [8, 6], [8, 7]],
            11: [[8, 8], [8, 9], [8, 10]]
        };

        this.swapHour = 29;

        // clock word
        this.clockWordMap = [[9, 8], [9, 9], [9, 10]];
    }
}

class QlockCalculatorTime {
    constructor(date) {
        this.date = date;
        this.qlock = new QlockDE();

        // combining all elements to one array & calculate active map
        this.activeMap = this.computeActiveMap(this.getActiveMinutes().concat(this.getActiveHours(), this.getActiveClockWords(), this.qlock.staticMap));
    }

    computeActiveMap(actives) {
        var returnValue = [];

        actives.forEach(function(elem) {
            // check if is an array already
            if(typeof returnValue[elem[0]] === 'undefined') {
                returnValue[elem[0]] = [];
            }

            returnValue[elem[0]][elem[1]] = true;
        });

        return returnValue;
    }

    getActiveHours() {
        var hour = this.date.getHours();

        if(this.date.getMinutes() >= this.qlock.swapHour) {
            hour += 1;
        }

        if(hour > 11) {
            hour -= 12;
        }

        return  this.qlock.hourMap[hour];
    }

    getActiveMinutes() {
        var returnValue = [];

        this.qlock.minutesMap.forEach(function(elem) {
            if(this.date.getMinutes() >= elem.bounds.low && this.date.getMinutes() <= elem.bounds.high) {
                returnValue = elem.active;
                return;
            }
        }.bind(this));

        return returnValue;
    }

    getActiveClockWords(x, y) {
        if(this.date.getMinutes() < 5) {
            return this.qlock.clockWordMap;
        } else {
            return [];
        }
    }

    isActive(x, y) {
        return (typeof this.activeMap[x] !== 'undefined' && typeof this.activeMap[x][y] !== 'undefined')
    }

    get() {
        return this.qlock.layout.map(
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


