import React from 'react';
import { Row } from 'react-bootstrap';
import QlockCell from './QlockCell';

class QlockRow extends React.Component {
    render() {
        return (
            <Row>
                {this.props.cells.map(function (item, index) {
                    return <QlockCell {...item} key={index}/>;
                })}
            </Row>
        );
    }
}

QlockRow.propTypes = {
    cells: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default QlockRow;
