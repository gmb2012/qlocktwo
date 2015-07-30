"use strict";

import React from 'react';
import ClassNames from 'classnames';

class QlockCell extends React.Component {
    render() {
        return (
            <div className={ClassNames({'qlock-letter': true, 'qlock-active': this.props.active})}>{this.props.char}</div>
        );
    }
}

export default QlockCell;
