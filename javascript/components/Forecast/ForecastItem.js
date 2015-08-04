import React from 'react';

class ForecastItem extends React.Component {
    render() {
        return (
            <div className='col-md-4 col-xs-4'>
                <div className='row'>
                    <div className='col-md-12 col-xs-12 forecast-label'>{this.props.label}</div>
                </div>
                <div className='row'>
                    <div className='col-md-4 col-xs-4'><i className={ this.props.labelClasses.join(' ') }></i></div>
                    <div className='col-md-8 col-xs-8 forecast-data'>
                        {this.props.temperature}<br />
                        <i className='wi wi-umbrella'></i>&nbsp;{this.props.humidity}<br />
                        <i className='wi wi-windy'></i>&nbsp;{this.props.wind}
                    </div>
                </div>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    label: React.PropTypes.string.isRequired,
    labelClasses: React.PropTypes.array.isRequired,
    temperature: React.PropTypes.string.isRequired,
    humidity: React.PropTypes.string.isRequired,
    wind: React.PropTypes.string.isRequired,
};

export default ForecastItem;
