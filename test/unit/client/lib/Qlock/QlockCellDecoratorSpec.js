import { expect } from 'chai';
import QlockCellDecorator from '../../../../../javascript/client/lib/Qlock/QlockCellDecorator';

describe('QlockCellDecorator', function () {
    it('decorates char and active = true', function () {
        expect(QlockCellDecorator.decorate('b', true)).to.deep.equal({ char: 'b', active: true });
    });

    it('decorates char and active = false', function () {
        expect(QlockCellDecorator.decorate('b', false)).to.deep.equal({ char: 'b', active: false });
    });

    it('decorates char and omitting active', function () {
        expect(QlockCellDecorator.decorate('b')).to.deep.equal({ char: 'b', active: false });
    });
});
