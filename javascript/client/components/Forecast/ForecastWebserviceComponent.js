import React from 'react';
import WebserviceComponent from '../WebserviceComponent';
import LogError from '../../lib/LogError';

class ForecastWebserviceComponent extends WebserviceComponent {
    mapIcon(weatherCondition) {
        let returnValue = '';

        if (this.props.weatherIcons[weatherCondition]) {
            returnValue = this.props.weatherIcons[weatherCondition];
        } else {
            LogError.error('Unable to map weather icon: ' + weatherCondition);
        }

        return returnValue;
    }
}

ForecastWebserviceComponent.propTypes = {
    weatherIcons: React.PropTypes.objectOf(React.PropTypes.string).isRequired
};

export default ForecastWebserviceComponent;
