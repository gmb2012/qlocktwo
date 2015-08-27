import React from 'react';
import { Col } from 'react-bootstrap';
import EnvironmentData from './EnvironmentData';

class EnvironmentItem extends React.Component {
    render() {
        return (
            <div>
                <Col md={1} xs={1} className='environment-label'>
                    <i className={ this.props.labelClasses.join(' ') }></i>
                </Col>
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
