import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import ForecastRow from './ForecastRow';

class ForecastHourlyComponent extends React.Component {
    render() {
        return (<div>{this.props.rows.map((items, index) => <ForecastRow items={items} key={index}/>)}</div>);
    }
}

ForecastHourlyComponent.propTypes = {
    rows: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.object)).isRequired
};

export default ForecastHourlyComponent;
