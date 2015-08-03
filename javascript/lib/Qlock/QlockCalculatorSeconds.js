import QlockCalculatorMinutesAndSeconds from './QlockCalculatorMinutesAndSeconds';

// Calculator for seconds
class QlockCalculatorSeconds extends QlockCalculatorMinutesAndSeconds {
    get() {
        return super.get('S', this.date.getSeconds(), 6);
    };
}

export default QlockCalculatorSeconds;
