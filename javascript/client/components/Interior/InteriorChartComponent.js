import React from 'react';
import { Line as LineChart } from 'react-chartjs';

class InteriorChartComponent extends React.Component {
    render() {
        this.props.chartDatasets.temperature.data = [ 23, 24, 25, 25, 25, 25, 25, 26 ];
        this.props.chartDatasets.humidity.data = [ 40, 40, 38, 37, 43, 47, 50, 50 ];

        let data = {
            labels: [ '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00' ],
            datasets: [ this.props.chartDatasets.temperature, this.props.chartDatasets.humidity ]
        };

        return (
            <LineChart data={data} options={this.props.chartOptions} className='interior-line-chart' />
        );
    }
}

InteriorChartComponent.propTypes = {
    refreshIntervall: React.PropTypes.number.isRequired,
    serviceURL: React.PropTypes.string.isRequired,
    chartOptions: React.PropTypes.object.isRequired,
    chartDatasets: React.PropTypes.object.isRequired
};

export default InteriorChartComponent;
