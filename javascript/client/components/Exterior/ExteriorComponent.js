import React from 'react';
import EnvironmentRow from '../Environment/EnvironmentRow';
import EnvironmentCategory from '../Environment/EnvironmentCategory';

class ExteriorComponent extends React.Component {
    render() {
        return (
            <div className='row environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <div className='col-md-10 col-xs-10'>
                    {this.props.rows.map((items, index) => <EnvironmentRow items={items} key={index}/>)}
                </div>
            </div>
        );
    }
}

ExteriorComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    rows: React.PropTypes.arrayOf(React.PropTypes.array).isRequired
};

export default ExteriorComponent;
