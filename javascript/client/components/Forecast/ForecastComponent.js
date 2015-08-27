import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EnvironmentCategory from '../Environment/EnvironmentCategory';
import ForecastRow from './ForecastRow';

class ForecastComponent extends React.Component {
    render() {
        return (
            <Row className='environment'>
                <EnvironmentCategory iconClasses={this.props.iconClasses} />
                <Col md={10} xs={10}>
                    <Row><Col md={12} xs={12}>{this.props.currentDate}</Col></Row>
                    {this.props.rows.map((items, index) => <ForecastRow items={items} key={index}/>)}
                </Col>
            </Row>
        );
    }
}

ForecastComponent.propTypes = {
    iconClasses: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    currentDate: React.PropTypes.string.isRequired,
    rows: React.PropTypes.array.isRequired
};

export default ForecastComponent;
