import QlockCalculatorMinutesAndSeconds from './QlockCalculatorMinutesAndSeconds';

// Calculator for minutes => modulo 5
class QlockCalculatorMinutes extends QlockCalculatorMinutesAndSeconds {
    get() {
        return super.get('M', this.date.getMinutes() % 5, 3);
    };
}

export default QlockCalculatorMinutes;
