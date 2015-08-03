import QlockCellDecorator from './QlockCellDecorator';

// Base calculator for minutes and seconds
class QlockCalculatorMinutesAndSeconds {
    constructor(dateParam) {
        this.date = dateParam;
    }

    toBinArray(time) {
        return time.toString(2).split('');
    }

    zeroPad(input, minLength) {
        let returnValue = input;

        while (returnValue.length < minLength) {
            returnValue = [ 0 ].concat(returnValue);
        }

        return returnValue;
    }

    get(firstChar, time, minLength) {
        return [ firstChar ].concat(this.zeroPad(this.toBinArray(time), minLength)).map(
            function (elem) {
                return QlockCellDecorator.decorate(elem.toString());
            }
        );
    }
}

export default QlockCalculatorMinutesAndSeconds;
