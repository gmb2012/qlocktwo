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
        const divNode = React.findDOMNode(qlockCell);
        expect(divNode.textContent).to.equal('A');
        expect(divNode.className).to.equal('qlock-letter qlock-active');
    });
});
