import React from 'react';
import QlockBlock from './components/Qlock/QlockBlock';
import InteriorBlock from './components/Interior/InteriorComponent';
import ExteriorBlock from './components/Exterior/ExteriorComponent';

/* global document */

// where to move that stuff?
React.render(
    <QlockBlock refreshIntervall={1000} />,
    document.getElementById('QlockBlock')
);