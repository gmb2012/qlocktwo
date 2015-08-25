import React from 'react';
import QlockBlock from './components/Qlock/QlockBlock';
import InteriorComponent from './components/Interior/InteriorComponent';
import ExteriorComponent from './components/Exterior/ExteriorComponent';
import ForecastComponent from './components/Forecast/ForecastComponent';
import Config from './config.json';

/* global document */

// where to move that stuff?
React.render(
    <QlockBlock refreshIntervall={1000} />,
    document.getElementById('QlockBlock')
);

// Interior component
React.render(
    <InteriorComponent {...Config.InteriorComponent} />,
    document.getElementById('Interior')
);

// Exterior component
let extRows = [
    [
        { labelClasses: [ 'wi', 'wi-thermometer', 'wi-1_4x' ], data: '24° C' },
        { labelClasses: [ 'wi', 'wi-sprinkles', 'wi-1_4x' ], data: '30%' },
        { labelClasses: [ 'wi', 'wi-windy', 'wi-1_2x' ], data: '104 km/h' }
    ],
    [
        { labelClasses: [ 'wi', 'wi-sunrise' ], data: '07:00' },
        { labelClasses: [ 'wi', 'wi-sunset' ], data: '21:50' },
        { labelClasses: [ 'wi', 'wi-moon-waning-gibbous-2', 'wi-1_6x' ] }
    ]
];

React.render(
    <ExteriorComponent rows={extRows} iconClasses={ [ 'fa', 'fa-tree', 'fa-2x' ] } />,
    document.getElementById('Exterior')
);

// Forecast component
let fcRows = [
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Morgens', temperature: '24° / 36° C', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Mittags', temperature: '24° / 36° C', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: 'Abends', temperature: '24° / 36° C', humidity: '67%', wind: '104 km/h' }
    ],
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '18.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '19.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '20.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '104 km/h' }
    ],
    [
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '21.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '14 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '22.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '1 km/h' },
        { labelClasses: [ 'wi', 'wi-day-rain-mix', 'wi-1_2x' ],
            label: '23.07.2015', temperature: '24° / 36° C', humidity: '67%', wind: '104 km/h' }
    ]
];

React.render(
    <ForecastComponent currentDate='17.07.2015' rows={fcRows} iconClasses={ [ 'fa', 'fa-binoculars', 'fa-1_4x' ] } />,
    document.getElementById('Forecast')
);
