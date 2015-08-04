import React from 'react';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import ForecastRow from './ForecastRow';

class ForecastComponent extends React.Component {
    render() {
        return (
            <div className='row environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <div className='col-md-10 col-xs-10'>
                    <div className='row'>
                        <div className='col-md-12 col-xs-12'>{this.props.currentDate}</div>
                    </div>
                    {this.props.rows.map((items, index) => <ForecastRow items={items} key={index}/>)}
                </div>
            </div>
        );
    }
}

ForecastComponent.propTypes = {
    iconClasses: React.PropTypes.array.isRequired,
    currentDate: React.PropTypes.string.isRequired,
    rows: React.PropTypes.array.isRequired
};

export default ForecastComponent;
