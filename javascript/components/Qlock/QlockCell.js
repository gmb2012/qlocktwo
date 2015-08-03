import React from 'react';
import classNames from 'classnames';

class QlockCell extends React.Component {
    render() {
        return (
            <div className={classNames({ 'qlock-letter': true, 'qlock-active': this.props.active })}>
                { this.props.char }
            </div>
        );
    }
}

QlockCell.propTypes = {
    active: React.PropTypes.bool.isRequired,
    char: React.PropTypes.string.isRequired
};

export default QlockCell;
