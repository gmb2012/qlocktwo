import { expect } from 'chai';
import QlockCalculatorTime from '../../../../../javascript/client/lib/Qlock/QlockCalculatorTime';

describe('QlockCalculatorTime', function () {
    let qlockCalculatorTime;
    let qlockLocalised;

    beforeEach(function () {
        qlockLocalised = {
            layout: [
                [ '0' ],
                [ '1' ],
                [ '2' ],
                [ '3' ],
                [ '4' ]
            ],
            swapHour: 25,
            hourMap: {
                0: [ [ 0, 0 ] ],
                1: [ [ 1, 0 ] ]
            },
            minutesMap: [
                {
                    bounds: { low: 5, high: 9 },
                    active: [ [ 2, 0 ] ]
                }
            ],
            clockWordMap: [ [ 3, 0 ] ],
            staticMap: [ [ 4, 0 ] ],
            applyCountrySpecificRules: function (date, input) {
                return input;
            }
        };
    });

    // calculate the full map
    it('calculates the right layout', function () {
        let expected = [
            [ { char: '0', active: true } ],
            [ { char: '1', active: false } ],
            [ { char: '2', active: false } ],
            [ { char: '3', active: true } ],
            [ { char: '4', active: true } ]
        ];

        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 0), qlockLocalised);

        expect(qlockCalculatorTime.get()).to.deep.equal(expected);
    });

    // is active
    it('1 is active at one 1 am', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1), qlockLocalised);

        expect(qlockCalculatorTime.isActive(1, 0)).to.equal(true);
    });

    it('1 is not active at one 12 am', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 0), qlockLocalised);

        expect(qlockCalculatorTime.isActive(1, 0)).to.equal(false);
    });

    // hours
    it('gets the hours for 1 am', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1), qlockLocalised);

        expect(qlockCalculatorTime.getActiveHours()).to.deep.equal([ [ 1, 0 ] ]);
    });

    it('gets the hours for 1 pm', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 13), qlockLocalised);

        expect(qlockCalculatorTime.getActiveHours()).to.deep.equal([ [ 1, 0 ] ]);
    });

    it('gets the hours for 11:30pm', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 23, 30), qlockLocalised);

        expect(qlockCalculatorTime.getActiveHours()).to.deep.equal([ [ 0, 0 ] ]);
    });

    // minutes
    it('gets the minutes for 4', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1, 4), qlockLocalised);

        expect(qlockCalculatorTime.getActiveMinutes()).to.deep.equal([]);
    });

    it('gets the minutes for 5', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1, 5), qlockLocalised);

        expect(qlockCalculatorTime.getActiveMinutes()).to.deep.equal([ [ 2, 0 ] ]);
    });

    // clockWordMap
    it('shows the clock word', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1, 4), qlockLocalised);

        expect(qlockCalculatorTime.getActiveClockWords()).to.deep.equal([ [ 3, 0 ] ]);
    });

    it('does not shows the clock word', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1, 5), qlockLocalised);

        expect(qlockCalculatorTime.getActiveClockWords()).to.deep.equal([]);
    });

    // computeActiveMap
    it('computes the active map', function () {
        qlockCalculatorTime = new QlockCalculatorTime(new Date(2015, 1, 1, 1, 5), qlockLocalised);

        let expected = [];
        expected[1] = [];
        expected[1][1] = true;

        expected[2] = [];
        expected[2][3] = true;

        expect(qlockCalculatorTime.computeActiveMap([ [ 1, 1 ], [ 2, 3 ] ])).to.deep.equal(expected);
    });
});
