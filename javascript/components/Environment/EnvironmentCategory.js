import React from 'react';

class EnvironmentCategory extends React.Component {
    render() {
        return (
            <div className='col-md-2 col-xs-2'>
                <i className={ this.props.iconClasses.join(' ') }></i>
            </div>
        );
    }
}

EnvironmentCategory.propTypes = {
    iconClasses: React.PropTypes.array.isRequired
};

export default EnvironmentCategory;
