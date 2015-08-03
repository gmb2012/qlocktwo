import React from 'react';
import EnvironmentRow from '../Environment/EnvironmentRow';

/* global document */

let items01 = [
    { labelClasses: [ 'wi', 'wi-thermometer', 'wi-2x' ], data: '24° C' },
    { labelClasses: [ 'wi', 'wi-sprinkles', 'wi-2x' ], data: '30%' }
];

let items02 = [
    { labelClasses: [ 'wi', 'wi-sunrise', 'wi-1_2x' ], data: '07:00' },
    { labelClasses: [ 'wi', 'wi-sunset', 'wi-1_2x' ], data: '21:50' },
    { labelClasses: [ 'wi', 'wi-moon-waning-gibbous-2', 'wi-1_2x' ] }
];

React.render(
    <EnvironmentRow items={items01} />,
    document.getElementById('Exterior01')
);

React.render(
    <EnvironmentRow items={items02} />,
    document.getElementById('Exterior02')
);
