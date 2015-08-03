import React from 'react';
import Qlock from '../../lib/Qlock/Qlock';
import QlockRow from './QlockRow';

class QlockBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: [], minAndSec: [] };

        // binding
        this.refreshClock = this.refreshClock.bind(this);
    }

    refreshClock() {
        let qlock = new Qlock(new Date());
        this.setState({ time: qlock.getTime(), minAndSec: qlock.getMinAndSec() });
    }

    componentDidMount() {
        this.refreshClock();
        setInterval(this.refreshClock, this.props.refreshIntervall);
    }

    render() {
        return (
            <div>
                {this.state.time.map((item, index) => <QlockRow cells={item} key={index}/>)}
                <QlockRow cells={this.state.minAndSec}/>
            </div>
        );
    }
}

QlockBlock.propTypes = {
    refreshIntervall: React.PropTypes.number.isRequired
};

export default QlockBlock;
