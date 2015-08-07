import React from 'react';

class EnvironmentData extends React.Component {
    render() {
        return (
            <div className='col-md-3 col-xs-3 environment-data'>
                { this.props.data }
            </div>
        );
    }
}

EnvironmentData.propTypes = {
    data: React.PropTypes.string.isRequired
};

export default EnvironmentData;
