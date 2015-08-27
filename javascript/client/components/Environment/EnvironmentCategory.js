import React from 'react';
import { Col } from 'react-bootstrap';

class EnvironmentCategory extends React.Component {
    render() {
        return (<Col md={2} xs={2}><i className={ this.props.iconClasses.join(' ') }></i></Col>);
    }
}

EnvironmentCategory.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default EnvironmentCategory;
