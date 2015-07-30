"use strict";

import React from 'react';
import Qlock from '../../lib/Qlock.js';
import QlockRow from './QlockRow.jsx';

class QlockBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: [], minAndSec:[]};

        // binding
        this.refreshClock = this.refreshClock.bind(this);
    }

    refreshClock() {
        var qlock = new Qlock(new Date());
        this.setState({time: qlock.getTime(), minAndSec: qlock.getMinAndSec()});
    }

    componentDidMount() {
        this.refreshClock();
        setInterval(this.refreshClock, this.props.refreshIntervall);
    }

    render() {
        return (
            <div>
                {this.state.time.map(function (item, index) {
                    return <QlockRow cells={item} key={index}/>;
                })}
                <QlockRow cells={this.state.minAndSec}/>
            </div>
        );
    }
}

export default QlockBlock;
