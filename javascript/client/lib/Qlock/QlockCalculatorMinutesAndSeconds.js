import QlockCellDecorator from './QlockCellDecorator';
import StringUtil from '../Util/StringUtil';

// Base calculator for minutes and seconds
class QlockCalculatorMinutesAndSeconds {
    constructor(dateParam) {
        this.date = dateParam;
    }

    toBin(time) {
        return time.toString(2);
    }

    get(firstChar, time, minLength) {
        return [ firstChar ].concat(StringUtil.zeroPad(this.toBin(time), minLength).split('')).map(
            function (elem) {
                return QlockCellDecorator.decorate(elem);
            }
        );
    }
}

export default QlockCalculatorMinutesAndSeconds;
