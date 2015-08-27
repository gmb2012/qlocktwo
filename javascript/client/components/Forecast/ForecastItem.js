import React from 'react';
import { Row, Col } from 'react-bootstrap';

class ForecastItem extends React.Component {
    render() {
        return (
            <Col md={4} xs={4}>
                <Row><Col md={12} xs={12} className='forecast-label'>{this.props.label}</Col></Row>
                <Row>
                    <Col md={4} xs={4}><i className={ this.props.labelClasses.join(' ') }></i></Col>
                    <Col md={8} xs={8} className='forecast-data'>
                        {this.props.temperature}<br />
                        <i className='wi wi-umbrella'></i>&nbsp;{this.props.humidity}<br />
                        <i className='wi wi-windy'></i>&nbsp;{this.props.wind}
                    </Col>
                </Row>
            </Col>
        );
    }
}

ForecastItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    labelClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    temperature: React.PropTypes.string.isRequired,
    humidity: React.PropTypes.string.isRequired,
    wind: React.PropTypes.string.isRequired
};

export default ForecastItem;
