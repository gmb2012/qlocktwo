let jsdom = require('jsdom'),
    chai = require('chai');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.window.styleMedia = true;
