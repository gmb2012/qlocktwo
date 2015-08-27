import React from 'react';
import { Col } from 'react-bootstrap';

class EnvironmentData extends React.Component {
    render() {
        return (<Col md={3} xs={3} className='environment-data'>{this.props.data}</Col>);
    }
}

EnvironmentData.propTypes = {
    data: React.PropTypes.string.isRequired
};

export default EnvironmentData;
