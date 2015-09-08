import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

class ForecastItem extends React.Component {
    render() {
        return (
            <Col md={4} xs={4}>
                <Row className='forecast-label'><Col md={12} xs={12}>{this.props.label}</Col></Row>
                <Row>
                    <Col md={6} xs={6} className='forecast-data-icon'>
                        <i className={ this.props.labelClasses.join(' ') }></i>
                    </Col>
                    <Col md={6} xs={6}
                         className={classNames({ 'forecast-data-temperature': true,
                         'forecast-data-temperature-from-to': (this.props.temperature.indexOf(' ') !== -1) })}>
                        {this.props.temperature.split(' ').map((item, index) =>
                            <Row className='text-center' key={index}>{item}</Row>)}
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={3}><i className='wi wi-umbrella wi-0_8x'></i></Col>
                    <Col md={3} xs={3} className='forecast-data'>{this.props.precipitationProbability}</Col>
                    <Col md={3} xs={3}><i className='wi wi-strong-wind wi-0_8x'></i></Col>
                    <Col md={3} xs={3} className='forecast-data'>{this.props.wind}</Col>
                </Row>
            </Col>
        );
    }
}

ForecastItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    labelClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    temperature: React.PropTypes.string.isRequired,
    precipitationProbability: React.PropTypes.string.isRequired,
    wind: React.PropTypes.string.isRequired
};

export default ForecastItem;
