import React from 'react/addons';
import { expect } from 'chai';
import QlockCell from '../../../../../javascript/client/components/Qlock/QlockCell';

const TestUtils = React.addons.TestUtils;

describe('QlockCell Component', function () {
    let qlockCell;

    beforeEach(function () {
        qlockCell = TestUtils.renderIntoDocument(<QlockCell char='A' active={true} />);
    });

    it('Renders a Qlock Cell', function () {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(qlockCell, 'qlock-letter')).to.have.length(1);

        expect(TestUtils.findRenderedComponentWithType(qlockCell, QlockCell).props.char).to.equal('A');
        expect(TestUtils.findRenderedComponentWithType(qlockCell, QlockCell).props.active).to.equal(true);
    });
});
