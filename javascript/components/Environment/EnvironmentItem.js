import React from 'react';
import EnvironmentData from './EnvironmentData';

class EnvironmentItem extends React.Component {
    render() {
        let data = '';
        if (this.props.data) {
            data = <EnvironmentData data={ this.props.data } />
        }

        return (
            <div>
                <div className='col-md-2 col-xs-2 environment-label'>
                    <i className={ this.props.labelClasses.join(' ') }></i>
                </div>
                {data}
            </div>
        );
    }
}

EnvironmentItem.propTypes = {
    labelClasses: React.PropTypes.array.isRequired,
    data: React.PropTypes.string
};

export default EnvironmentItem;
