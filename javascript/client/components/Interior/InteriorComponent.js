import React from 'react';
import { Line as LineChart } from 'react-chartjs';
import InteriorEnvironmentComponent from './InteriorEnvironmentComponent';
import EnvironmentCategory from '../Environment/EnvironmentCategory';

/* global document */
class InteriorComponent extends React.Component {
    render() {
        let options = {
            pointDot: false
        };

        let data = {
            labels: [ '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '00:00' ],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: '#000',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: '#000',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: '#000',
                    data: [ 23, 24, 25, 25, 25, 25, 25, 26 ]
                },
                {
                    label: 'My Second dataset',
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [ 40, 40, 38, 37, 43, 47, 50, 50 ]
                }
            ]
        };

        return (
            <div className='row environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <div className='col-md-10 col-xs-10'>
                    <InteriorEnvironmentComponent {...this.props.interiorEnvironmentComponent} />

                    <div className='row'>
                        <LineChart data={data} options={options} style={ { height: '130px', width: '100%' } } />
                    </div>

                </div>
            </div>
        );
    }
}

InteriorComponent.propTypes = {
    iconClasses: React.PropTypes.array.isRequired,
    interiorEnvironmentComponent: React.PropTypes.object.isRequired
};

export default InteriorComponent;
