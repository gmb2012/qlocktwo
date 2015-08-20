import React from 'react';
import Superagent from 'superagent';
import LogError from '../lib/LogError';

class WebserviceComponent extends React.Component {
    constructor(props) {
        super(props);

        // binding
        this.refresh = this.refresh.bind(this);
    }

    responseBodyToState(responseBody) {
        return {};
    }

    refresh() {
        Superagent
            .get(this.props.serviceURL)
            .end(function (err, res) {
                if (res && res.ok) {
                    this.setState({ items: this.getInteriorCurrentStructure(res.body.temperature, res.body.humidity) });
                } else {
                    LogError.error('Webservice error in class "' + this.constructor.name + '": ' + err);
                }
            }.bind(this));
    }

    componentDidMount() {
        this.refresh();
        setInterval(this.refresh, this.props.refreshIntervall);
    }
}

WebserviceComponent.propTypes = {
    refreshIntervall: React.PropTypes.number.isRequired,
    serviceURL: React.PropTypes.string.isRequired
};

export default WebserviceComponent;