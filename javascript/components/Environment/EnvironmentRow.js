import React from 'react';
import EnvironmentItem from './EnvironmentItem';

class EnvironmentRow extends React.Component {
    render() {
        return (
            <div className='row'>
                {this.props.items.map(function (item, index) {
                    return <EnvironmentItem {...item} key={index}/>;
                })}
            </div>
        );
    }
}

EnvironmentRow.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default EnvironmentRow;