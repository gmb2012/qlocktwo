import { expect } from 'chai';
import QlockDE from '../../../../../javascript/client/lib/Qlock/QlockDE';

describe('QlockDE', function () {
    let qlockDE;

    beforeEach(function () {
        qlockDE = new QlockDE();
    });

    it('remove the s from "eins" at one 1 am', function () {
        expect(qlockDE.applyCountrySpecificRules(new Date(2015, 8, 5, 1), [ [ 4, 3 ] ]).length).to.equal(0);
    });

    it('remove the s from "eins" at one 1 pm', function () {
        expect(qlockDE.applyCountrySpecificRules(new Date(2015, 8, 5, 13), [ [ 4, 3 ] ]).length).to.equal(0);
    });

    it('remove the s from "eins" at one 1 am 4 minutes', function () {
        expect(qlockDE.applyCountrySpecificRules(new Date(2015, 8, 5, 1, 4), [ [ 4, 3 ] ]).length).to.equal(0);
    });

    it('doesn not remove the s from "eins" at one 1 am 5 minutes', function () {
        expect(qlockDE.applyCountrySpecificRules(new Date(2015, 8, 5, 1, 5), [ [ 4, 3 ] ]).length).to.equal(1);
    });
});
