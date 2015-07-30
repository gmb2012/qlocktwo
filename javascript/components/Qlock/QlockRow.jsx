"use strict";

import React from 'react';
import QlockCell from './QlockCell.jsx';

class QlockRow extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.cells.map(function (item, index) {
                    return <QlockCell char={item.char} active={item.active} key={index}/>;
                })}
            </div>
        );
    }
}

export default QlockRow;
