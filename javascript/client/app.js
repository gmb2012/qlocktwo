import React from 'react';
import Config from './config.json';
import ComponentRegistry from './components/ComponentRegistry';

/* global document */
Object.keys(Config).map(function (key) {
    let Component = ComponentRegistry[key];
    React.render(<Component {...Config[key]} />, document.getElementById(key));
});
