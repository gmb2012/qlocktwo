import React from 'react';
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
        let chart = <div className='interior-line-chart'></div>;
        if (this.state) {
            chart = <LineChart data={this.state} options={this.props.chartOptions} className='interior-line-chart' />;
        }

        return chart;
    }
}

InteriorChartComponent.propTypes = {
    chartOptions: React.PropTypes.object.isRequired,
    chartDatasets: React.PropTypes.object.isRequired
};

export default InteriorChartComponent;
