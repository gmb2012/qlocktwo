import React from 'react';
import Superagent from 'superagent';
import EnvironmentRow from '../Environment/EnvironmentRow';
import LogError from '../../lib/LogError';

class InteriorEnvironmentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: this.getInteriorCurrentStructure(0, 0) };

        // binding
        this.refreshInteriorCurrent = this.refreshInteriorCurrent.bind(this);
    }

    getInteriorCurrentStructure(temperature, humidity) {
        return [
            { labelClasses: [ 'wi', 'wi-thermometer', 'wi-2x' ], data: temperature + '° C' },
            { labelClasses: [ 'wi', 'wi-sprinkles', 'wi-2x' ], data: Math.round(humidity * 100) + '%' }
        ];
    }

    refreshInteriorCurrent() {
        Superagent
            .get(this.props.serviceURL)
            .end(function (err, res) {
                if (res && res.ok) {
                    this.setState({ items: this.getInteriorCurrentStructure(res.body.temperature, res.body.humidity) });
                } else {
                    LogError.error('Webservice error in Interior / Current: ' + err);
                }
            }.bind(this));
    }

    componentDidMount() {
        this.refreshInteriorCurrent();
        setInterval(this.refreshInteriorCurrent, this.props.refreshIntervall);
    }

    render() {
        return (
            <EnvironmentRow items={this.state.items} />
        );
    }
}

InteriorEnvironmentComponent.propTypes = {
    refreshIntervall: React.PropTypes.number.isRequired,
    serviceURL: React.PropTypes.string.isRequired
};

export default InteriorEnvironmentComponent;
