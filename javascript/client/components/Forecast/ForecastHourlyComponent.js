import React from 'react';
import ForecastWebserviceComponent from './ForecastWebserviceComponent';
import ForecastRow from './ForecastRow';
import StringUtil from '../../lib/Util/StringUtil';
import LogError from '../../lib/LogError';

class ForecastHourlyComponent extends ForecastWebserviceComponent {
    convertItem(item) {
        const timestamp = Object.keys(item)[0];

        return {
            labelClasses: [ 'wi', this.mapIcon(item[timestamp].icon), 'wi-1_6x' ],
            label: StringUtil.zeroPad((new Date(parseInt(timestamp, 10))).getHours().toString(), 2) + ':00 Uhr',
            temperature: item[timestamp].temperature + '°',
            precipitationProbability: (item[timestamp].precipitationProbability * 100).toString(),
            wind: item[timestamp].wind.toString()
        };
    }

    responseBodyToState(resBody) {
        return { rows: [
            [ this.convertItem(resBody[0]), this.convertItem(resBody[1]), this.convertItem(resBody[2]) ],
            [ this.convertItem(resBody[3]), this.convertItem(resBody[4]), this.convertItem(resBody[5]) ]
        ] };
    }

    render() {
        return (<div>
            {this.state && (this.state.rows.map((items, index) => <ForecastRow items={items} key={index}/>))}
        </div>);
    }
}

export default ForecastHourlyComponent;
