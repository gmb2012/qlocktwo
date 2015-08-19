import React from 'react';
import InteriorEnvironmentComponent from './InteriorEnvironmentComponent';
import InteriorChartComponent from './InteriorChartComponent';
import EnvironmentCategory from '../Environment/EnvironmentCategory';

class InteriorComponent extends React.Component {
    render() {
        return (
            <div className='row environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <div className='col-md-10 col-xs-10'>
                    <InteriorEnvironmentComponent {...this.props.interiorEnvironmentComponent} />

                    <div className='row'>
                        <InteriorChartComponent {...this.props.interiorChartComponent} />
                    </div>

                </div>
            </div>
        );
    }
}

InteriorComponent.propTypes = {
    iconClasses: React.PropTypes.array.isRequired,
    interiorEnvironmentComponent: React.PropTypes.object.isRequired,
    interiorChartComponent: React.PropTypes.object.isRequired
};

export default InteriorComponent;
