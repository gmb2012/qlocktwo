import React from 'react';
import ForecastWebserviceComponent from './ForecastWebserviceComponent';
import ForecastRow from './ForecastRow';
import StringUtil from '../../lib/Util/StringUtil';
import DateUtil from '../../lib/Util/DateUtil.js';
import LogError from '../../lib/LogError';

class ForecastDailyComponent extends ForecastWebserviceComponent {
    convertItem(item) {
        const timestamp = Object.keys(item)[0];

        return {
            labelClasses: [ 'wi', this.mapIcon(item[timestamp].icon), 'wi-1_6x' ],
            label: DateUtil.formatGermanDate(new Date(parseInt(timestamp, 10))),
            temperature: item[timestamp].temperature[0] + '° ' + item[timestamp].temperature[1] + '°',
            precipitationProbability: (item[timestamp].precipitationProbability * 100).toString(),
            wind: item[timestamp].wind.toString()
        };
    }

    responseBodyToState(resBody) {
        return { rows: [
            [ this.convertItem(resBody[0]), this.convertItem(resBody[1]), this.convertItem(resBody[2]) ]
        ] };
    }

    render() {
        return (<div>
            {this.state && (this.state.rows.map((items, index) => <ForecastRow items={items} key={index}/>))}
        </div>);
    }
}

export default ForecastDailyComponent;
