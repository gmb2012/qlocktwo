# About
A QlockTwo combined with displaying of weather data from node.js webservices based on react.js

# TODO
https://github.com/gmb2012/qlocktwo/blob/master/javascript/client/components/Environment/EnvironmentRow.js#L7
kurzschreibweise 
```{this.props.data && <EnvironmentData data={ this.props.data } />}

https://github.com/gmb2012/qlocktwo/blob/master/javascript/client/components/Environment/EnvironmentRow.js#L15
—> array von was genau? strings? numbers?
`React.PropTypes.arrayOf(React.PropTypes.number)

beim testen von https://github.com/gmb2012/qlocktwo/blob/master/test/unit/client/components/Qlock/QlockRowSpec.js willst du eigentlich nicht die `Cell` mittesten. werden aber im moment mitgerendert. schau dir mal https://www.npmjs.com/package/react-shallow-testutils an
npm: react-shallow-testutils
Replacement for TestUtils when using React's shallow rendering (2KB)
shallow rendering rendert nur eine ebene tief, kannst aber testen ob die `cells` mit drin sind
z.B.
```
findAllWithType(QlockRow, ‘QlockCell’); expect

- New version of weather icons
- maybe use react-bootstrap
- exterior compomnent
- exterior webservice
- forecast component
- foreacast webservice
- move foreacast webservice to own class, return a promise
- webservice for calculating graph data
- fix lint for var in server
- use range and map
- webservices with super agent => incl. error if external webservice is not reachable (timeout)
- Unit Tests for react components
- Unit tests for webservices
- Documentation
- Buffering if writing to the database => save to ram incl timestamp + logging
- more views => stuff for stats => averages, monthly reporting, ....
- check for new font
- flexbox to remove fixed height for the border => http://t3n.de/news/css-box-modell-alternative-529712/ & http://flexbox.io/#/
- Wind speed miles per hour to kmh
- Moonphase from current
- Save also external temperature and humidity
- last updated information in console or in gui


# Documentation
Morning: 00:00 - 07:00
Midday: 08:00 - 03:00
Morning: 04:00 - 11:00

run in dev mode: npm run dev
linting: npm run lint

## nodemon
https://github.com/remy/nodemon
npm install -g nodemon

# Resources
https://developer.forecast.io/docs/v2#forecast_call

# What to ask
- Node in Production