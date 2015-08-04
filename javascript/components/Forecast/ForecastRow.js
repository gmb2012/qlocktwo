import React from 'react';
import ForecastItem from './ForecastItem';

class ForecastRow extends React.Component {
    render() {
        return (
            <div className='row'>
                {this.props.items.map((item, index) => <ForecastItem {...item} key={index} />)}
            </div>
        );
    }
}

ForecastRow.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default ForecastRow;
