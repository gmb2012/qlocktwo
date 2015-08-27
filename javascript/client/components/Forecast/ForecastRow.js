import React from 'react';
import { Row } from 'react-bootstrap';
import ForecastItem from './ForecastItem';

class ForecastRow extends React.Component {
    render() {
        return (<Row>{this.props.items.map((item, index) => <ForecastItem {...item} key={index} />)}</Row>);
    }
}

ForecastRow.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default ForecastRow;
