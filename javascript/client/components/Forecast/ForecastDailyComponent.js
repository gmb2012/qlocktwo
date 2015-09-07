import React from 'react';
import ForecastRow from './ForecastRow';

class ForecastDailyComponent extends React.Component {
    render() {
        return (<div>{this.props.rows.map((items, index) => <ForecastRow items={items} key={index}/>)}</div>);
    }
}

ForecastDailyComponent.propTypes = {
    rows: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.object)).isRequired
};

export default ForecastDailyComponent;
