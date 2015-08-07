import { expect } from 'chai';
import Qlock from '../../../../../javascript/client/lib/Qlock/Qlock';

describe('QlockDE', function () {
    let qlock;

    it('agetting minutes and seconds works correctly', function () {
        for (let min = 0; min < 60; min += 1) {
            for (let sec = 0; sec < 60; sec += 1) {
                qlock = new Qlock(new Date(2015, 1, 1, 0, min, sec));
                expect(qlock.getMinAndSec()).to.be.a('array');
            }
        }
    });

    it('getting the time works correctly', function () {
        for (let hour = 0; hour < 24; hour += 1) {
            for (let min = 0; min < 60; min += 1) {
                qlock = new Qlock(new Date(2015, 1, 1, hour, min));
                expect(qlock.getTime()).to.be.a('array');
            }
        }
    });
});
