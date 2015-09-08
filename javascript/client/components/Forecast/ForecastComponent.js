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
                    <ForecastHourlyComponent
                        {...this.props.forecastHourlyComponent} weatherIcons={this.props.weatherIcons} />
                    <ForecastDailyComponent
                        {...this.props.forecastDailyComponent} weatherIcons={this.props.weatherIcons} />
                </Col>
            </Row>
        );
    }
}

ForecastComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    forecastHourlyComponent: React.PropTypes.object.isRequired,
    forecastDailyComponent: React.PropTypes.object.isRequired,
    weatherIcons: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

export default ForecastComponent;
