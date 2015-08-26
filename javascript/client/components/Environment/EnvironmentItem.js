import React from 'react';
import EnvironmentData from './EnvironmentData';

class EnvironmentItem extends React.Component {
    render() {
        return (
            <div>
                <div className='col-md-1 col-xs-1 environment-label'>
                    <i className={ this.props.labelClasses.join(' ') }></i>
                </div>
                {this.props.data && <EnvironmentData data={ this.props.data } />}
            </div>
        );
    }
}

EnvironmentItem.propTypes = {
    labelClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    data: React.PropTypes.string
};

export default EnvironmentItem;
