import React from 'react';
import WebserviceComponent from '../WebserviceComponent';
import EnvironmentRow from '../Environment/EnvironmentRow';

class InteriorEnvironmentComponent extends WebserviceComponent {
    getInteriorCurrentStructure(temperature, humidity) {
        return [
            { labelClasses: [ 'wi', 'wi-thermometer', 'wi-fw' ], data: temperature + '° C' },
            { labelClasses: [ 'wi', 'wi-humidity', 'wi-fw' ], data: Math.round(humidity * 100) + ' %' }
        ];
    }

    responseBodyToState(responseBody) {
        return { items: this.getInteriorCurrentStructure(responseBody.temperature, responseBody.humidity) };
    }

    render() {
        return (this.state && <EnvironmentRow items={this.state.items} />);
    }
}

export default InteriorEnvironmentComponent;
