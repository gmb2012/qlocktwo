import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StringUtil from '../../lib/Util/StringUtil';

class DateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: '' };

        // binding
        this.refreshDate = this.refreshDate.bind(this);
    }

    refreshDate() {
        let date = new Date();
        this.setState({ date: StringUtil.zeroPad(date.getDay().toString(), 2) + '.' +
            StringUtil.zeroPad((date.getMonth() + 1).toString(), 2) + '.' + date.getFullYear().toString() });
    }

    componentDidMount() {
        this.refreshDate();
        setInterval(this.refreshDate, this.props.refreshInterval);
    }

    render() {
        return (
            <Row className='date'>
                <Col md={12} className='text-right'>{this.state.date}</Col>
            </Row>
        );
    }
}

DateComponent.propTypes = {
    refreshInterval: React.PropTypes.number.isRequired
};

export default DateComponent;
