import React from 'react';
import Config from './config.json';
import ComponentRegistry from './components/ComponentRegistry';

import ForecastComponent from './components/Forecast/ForecastComponent';

/* global document */
Object.keys(Config).map(function (key) {
    let Component = ComponentRegistry[key];
    React.render(<Component {...Config[key]} />, document.getElementById(key));
});

// Forecast component
let fcRows = [
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Morgens', temperature: '24° / 36°', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Mittags', temperature: '24° / 36°', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Abends', temperature: '24° / 36°', humidity: '67%', wind: '104 km/h' }
    ],
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '18.07.2015', temperature: '24° / 36°', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '19.07.2015', temperature: '24° / 36°', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '20.07.2015', temperature: '-24° / -36°', humidity: '67%', wind: '104 km/h' }
    ],
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '21.07.2015', temperature: '24° / 36°', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '22.07.2015', temperature: '24° / 36°', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '23.07.2015', temperature: '24° / 36°', humidity: '67%', wind: '104 km/h' }
    ]
];

React.render(
    <ForecastComponent currentDate='17.07.2015' rows={fcRows} iconClasses={ [ 'fa', 'fa-binoculars', 'fa-1_4x' ] } />,
    document.getElementById('Forecast')
);
