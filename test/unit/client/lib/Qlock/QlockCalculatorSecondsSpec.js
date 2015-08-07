import { expect } from 'chai';
import QlockCalculatorSeconds from '../../../../../javascript/client/lib/Qlock/QlockCalculatorSeconds';
import QlockCellDecorator from '../../../../../javascript/client/lib/Qlock/QlockCellDecorator';

describe('QlockCalculatorSeconds', function () {
    let qlockCalculatorSeconds;

    it('zero seconds are displayed correctly', function () {
        qlockCalculatorSeconds = new QlockCalculatorSeconds(new Date(2015, 8, 5, 1, 0, 0));

        let expected = [ 'S', '0', '0', '0', '0', '0', '0' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorSeconds.get()).to.deep.equal(expected);
    });

    it('59 seconds are displayed correctly', function () {
        qlockCalculatorSeconds = new QlockCalculatorSeconds(new Date(2015, 8, 5, 1, 0, 59));

        let expected = [ 'S', '1', '1', '1', '0', '1', '1' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorSeconds.get()).to.deep.equal(expected);
    });
});
