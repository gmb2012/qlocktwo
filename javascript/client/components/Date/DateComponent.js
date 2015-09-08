import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DateUtil from '../../lib/Util/DateUtil.js';

class DateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: '' };

        // binding
        this.refreshDate = this.refreshDate.bind(this);
    }

    refreshDate() {
        this.setState({ date: DateUtil.formatGermanDate(new Date()) });
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
