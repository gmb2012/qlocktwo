import QlockDE from './QlockDE';
import QlockCalculatorTime from './QlockCalculatorTime';
import QlockCalculatorMinutes from './QlockCalculatorMinutes';
import QlockCalculatorSeconds from './QlockCalculatorSeconds';

// Qlock base class to be exposed to other modules
class Qlock {
    constructor(date) {
        this.minutesCalculator = new QlockCalculatorMinutes(date);
        this.secondsCalculator = new QlockCalculatorSeconds(date);
        this.timeCalculator = new QlockCalculatorTime(date, new QlockDE());
    }

    getTime() {
        return this.timeCalculator.get();
    }

    getMinAndSec() {
        return this.minutesCalculator.get().concat(this.secondsCalculator.get());
    }
}

export default Qlock;
