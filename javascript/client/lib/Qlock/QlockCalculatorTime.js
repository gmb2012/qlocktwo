import QlockCellDecorator from './QlockCellDecorator';

// Calculator for the time
class QlockCalculatorTime {
    constructor(date, qlock) {
        this.date = date;
        this.qlock = qlock;
    }

    computeActiveMap(actives) {
        let returnValue = [];

        actives.forEach(function (elem) {
            // check if is an array already
            if (typeof returnValue[elem[0]] === 'undefined') {
                returnValue[elem[0]] = [];
            }

            returnValue[elem[0]][elem[1]] = true;
        });

        return returnValue;
    }

    getActiveHours() {
        let hour = this.date.getHours();

        if (this.date.getMinutes() >= this.qlock.swapHour) {
            hour += 1;
        }

        if (hour === 24) {
            hour = 0;
        } else if (hour > 11) {
            hour -= 12;
        }

        return this.qlock.hourMap[hour];
    }

    getActiveMinutes() {
        let returnValue = [];

        this.qlock.minutesMap.forEach(function (elem) {
            if (this.date.getMinutes() >= elem.bounds.low && this.date.getMinutes() <= elem.bounds.high) {
                returnValue = elem.active;
            }
        }.bind(this));

        return returnValue;
    }

    getActiveClockWords() {
        let returnValue = [];

        if (this.date.getMinutes() < 5) {
            returnValue = this.qlock.clockWordMap;
        }

        return returnValue;
    }

    isActive(x, y) {
        // combining all elements to one array & calculate active map
        if (!this.activeMap) {
            this.activeMap =
                this.computeActiveMap(
                    this.qlock.applyCountrySpecificRules(
                        this.date,
                        this.getActiveMinutes().concat(
                            this.getActiveHours(),
                            this.getActiveClockWords(),
                            this.qlock.staticMap)));
        }

        return (typeof this.activeMap[x] !== 'undefined' && typeof this.activeMap[x][y] !== 'undefined');
    }

    get() {
        return this.qlock.layout.map(
            function (row, rowIndex) {
                return row.map(function (char, columIndex) {
                    return QlockCellDecorator.decorate(char, this.isActive(rowIndex, columIndex));
                }.bind(this));
            }.bind(this)
        );
    }
}

export default QlockCalculatorTime;
