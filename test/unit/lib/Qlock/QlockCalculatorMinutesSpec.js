import { expect } from 'chai';
import QlockCalculatorMinutes from '../../../../javascript/lib/Qlock/QlockCalculatorMinutes';
import QlockCellDecorator from '../../../../javascript/lib/Qlock/QlockCellDecorator';

describe('QlockCalculatorMinutes', function () {
    let qlockCalculatorMinutes;

    it('zero minutes are displayed correctly', function () {
        qlockCalculatorMinutes = new QlockCalculatorMinutes(new Date(2015, 8, 5, 1, 0));

        let expected = [ 'M', '0', '0', '0' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorMinutes.get()).to.deep.equal(expected);
    });

    it('four minutes are displayed correctly', function () {
        qlockCalculatorMinutes = new QlockCalculatorMinutes(new Date(2015, 8, 5, 1, 4));

        let expected = [ 'M', '1', '0', '0' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorMinutes.get()).to.deep.equal(expected);
    });

    it('five minutes are displayed correctly', function () {
        qlockCalculatorMinutes = new QlockCalculatorMinutes(new Date(2015, 8, 5, 1, 5));

        let expected = [ 'M', '0', '0', '0' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorMinutes.get()).to.deep.equal(expected);
    });
});

