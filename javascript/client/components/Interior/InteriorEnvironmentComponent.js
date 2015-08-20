import React from 'react';
import WebserviceComponent from '../WebserviceComponent';
import EnvironmentRow from '../Environment/EnvironmentRow';

class InteriorEnvironmentComponent extends WebserviceComponent {
    constructor(props) {
        super(props);
        this.state = { items: this.getInteriorCurrentStructure(0, 0) };
    }

    getInteriorCurrentStructure(temperature, humidity) {
        return [
            { labelClasses: [ 'wi', 'wi-thermometer', 'wi-2x' ], data: temperature + '° C' },
            { labelClasses: [ 'wi', 'wi-sprinkles', 'wi-2x' ], data: Math.round(humidity * 100) + '%' }
        ];
    }

    responseBodyToState(responseBody) {
        return { items: this.getInteriorCurrentStructure(responseBody.temperature, responseBody.humidity) };
    }

    render() {
        return <EnvironmentRow items={this.state.items} />;
    }
}

export default InteriorEnvironmentComponent;
