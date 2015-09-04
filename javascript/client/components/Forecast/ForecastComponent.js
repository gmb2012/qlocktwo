import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import ForecastRow from './ForecastRow';

class ForecastComponent extends React.Component {
    render() {
        return (
            <Row className='environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <Col md={10} xs={10}>
                    {this.props.forecast.hourly.map((items, index) => <ForecastRow items={items} key={index}/>)}
                    {this.props.forecast.daily.map((items, index) => <ForecastRow items={items} key={index}/>)}
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
