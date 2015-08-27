import React from 'react';
import { Row } from 'react-bootstrap';
import { Line as LineChart } from 'react-chartjs';
import WebserviceComponent from '../WebserviceComponent';
import StringUtil from '../../lib/Util/StringUtil';

class InteriorChartComponent extends WebserviceComponent {
    extractLabels(responseBody) {
        return Object.keys(responseBody).map(function (key) {
            return StringUtil.zeroPad(key.toString(), 2) + ':00';
        });
    }

    extractValues(responseBody, type) {
        return Object.keys(responseBody).map(function (key) {
            return responseBody[key][type];
        });
    }

    responseBodyToState(responseBody) {
        this.props.chartDatasets.temperature.data = this.extractValues(responseBody, 'temperature');
        this.props.chartDatasets.humidity.data = this.extractValues(responseBody, 'humidity').map(
            function (item) {
                return Math.round(item * 100);
            });

        return {
            labels: this.extractLabels(responseBody),
            datasets: [ this.props.chartDatasets.temperature, this.props.chartDatasets.humidity ]
        };
    }

    render() {
        return (this.state &&
            (<Row>
                <LineChart data={this.state} options={this.props.chartOptions} className='interior-line-chart' />
            </Row>));
    }
}

InteriorChartComponent.propTypes = {
    chartOptions: React.PropTypes.object.isRequired,
    chartDatasets: React.PropTypes.object.isRequired
};

export default InteriorChartComponent;
