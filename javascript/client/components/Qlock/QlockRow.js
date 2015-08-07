import React from 'react';
import QlockCell from './QlockCell';

class QlockRow extends React.Component {
    render() {
        return (
            <div className='row'>
                {this.props.cells.map(function (item, index) {
                    return <QlockCell {...item} key={index}/>;
                })}
            </div>
        );
    }
}

QlockRow.propTypes = {
    cells: React.PropTypes.array.isRequired
};

export default QlockRow;
