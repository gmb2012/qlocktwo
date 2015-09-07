import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import ForecastHourlyComponent from './ForecastHourlyComponent';
import ForecastDailyComponent from './ForecastDailyComponent';

class ForecastComponent extends React.Component {
    render() {
        return (
            <Row className='environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <Col md={10} xs={10}>
                    <ForecastHourlyComponent rows={this.props.forecast.hourly} />
                    <ForecastDailyComponent rows={this.props.forecast.daily} />
                </Col>
            </Row>
        );
    }
}

ForecastComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    forecast:
        React.PropTypes.objectOf(React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.object))).isRequired
};

export default ForecastComponent;
