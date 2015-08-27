import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WebserviceComponent from '../WebserviceComponent';
import EnvironmentRow from '../Environment/EnvironmentRow';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import StringUtil from '../../lib/Util/StringUtil';

class ExteriorComponent extends WebserviceComponent {
    getRow(labelClasses, data) {
        return { labelClasses: labelClasses, data: data };
    }

    getRowTemperature(resBody) {
        return this.getRow(this.props.labelClasses.temperature, resBody.temperature + '° C');
    }

    getRowHumidity(resBody) {
        return this.getRow(this.props.labelClasses.humidity, Math.round(resBody.humidity * 100) + ' %');
    }

    getRowWind(resBody) {
        return this.getRow(this.props.labelClasses.wind, resBody.wind + ' km/h');
    }

    getRowSun(label, date) {
        return this.getRow(
            label,
            StringUtil.zeroPad(date.getHours().toString(), 2) + ':' +
            StringUtil.zeroPad(date.getMinutes().toString(), 2)
        );
    }

    getRowSunrise(resBody) {
        return this.getRowSun(this.props.labelClasses.sunrise, new Date(resBody.sunrise));
    }

    getRowSunset(resBody) {
        return this.getRowSun(this.props.labelClasses.sunset, new Date(resBody.sunset));
    }

    getRowMoon(resBody) {
        let moonClass = Object.keys(this.props.moonClasses).filter(function (key) {
            return (this.props.moonClasses[key].from <= resBody.moon && this.props.moonClasses[key].to >= resBody.moon);
        }.bind(this));

        return this.getRow(this.props.labelClasses.moon.concat(moonClass));
    }

    responseBodyToState(resBody) {
        return { rows: [
                [ this.getRowTemperature(resBody), this.getRowHumidity(resBody), this.getRowWind(resBody) ],
                [ this.getRowSunrise(resBody), this.getRowSunset(resBody), this.getRowMoon(resBody) ]
        ] };
    }

    render() {
        return (
            <Row className='environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <Col md={10} xs={10}>
                    {this.state && (this.state.rows.map((items, index) => <EnvironmentRow items={items} key={index}/>))}
                </Col>
            </Row>
        );
    }
}

ExteriorComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    labelClasses: React.PropTypes.objectOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired,
    moonClasses: React.PropTypes.objectOf(React.PropTypes.object).isRequired
};

export default ExteriorComponent;
