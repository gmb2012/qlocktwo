import { expect } from 'chai';
import QlockCalculatorMinutesAndSeconds from '../../../../javascript/lib/Qlock/QlockCalculatorMinutesAndSeconds';
import QlockCellDecorator from '../../../../javascript/lib/Qlock/QlockCellDecorator';

describe('QlockCalculatorMinutesAndSeconds', function () {
    let qlockCalculatorMinutesAndSeconds;

    beforeEach(function () {
        qlockCalculatorMinutesAndSeconds = new QlockCalculatorMinutesAndSeconds();
    });

    it('binary array is constructed correctly', function () {
        expect(qlockCalculatorMinutesAndSeconds.toBinArray(13)).to.deep.equal([ '1', '1', '0', '1' ]);
    });

    it('padding of zeros works', function () {
        expect(qlockCalculatorMinutesAndSeconds.zeroPad([ '1' ], 5)).to.deep.equal([ '0', '0', '0', '0', '1' ]);
    });

    it('main method works correctly', function () {
        let expected = [ 'B', '0', '1', '1', '0', '1' ].map(function (elem) {
            return QlockCellDecorator.decorate(elem);
        });

        expect(qlockCalculatorMinutesAndSeconds.get('B', 13, 5)).to.deep.equal(expected);
    });
});

