import React from 'react/addons';
import { expect } from 'chai';
import QlockRow from '../../../../../javascript/client/components/Qlock/QlockRow';

const TestUtils = React.addons.TestUtils;

describe('QlockRow Component', function () {
    let qlockRow;

    beforeEach(function () {
        let cells = [
            { char: 'A', active: true },
            { char: 'B', active: false }
        ];

        qlockRow = TestUtils.renderIntoDocument(<QlockRow cells={cells} />);
    });

    it('Renders a Qlock Row', function () {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(qlockRow, 'row')).to.have.length(1);
        expect(TestUtils.scryRenderedDOMComponentsWithClass(qlockRow, 'qlock-letter')).to.have.length(2);
    });
});
